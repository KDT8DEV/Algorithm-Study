const http = require("http");
const fs = require("fs");
const path = require("path");

const DATA_DIR = "/home/programmers/project/data/input";

let users = [];
let events = [];
let registrations = [];
let venues = [];
let event_organizers = [];

try {
  users = JSON.parse(
    fs.readFileSync(path.join(DATA_DIR, "users.json"), "utf8")
  );
  events = JSON.parse(
    fs.readFileSync(path.join(DATA_DIR, "events.json"), "utf8")
  );
  registrations = JSON.parse(
    fs.readFileSync(path.join(DATA_DIR, "registrations.json"), "utf8")
  );
  venues = JSON.parse(
    fs.readFileSync(path.join(DATA_DIR, "venues.json"), "utf8")
  );
  event_organizers = JSON.parse(
    fs.readFileSync(path.join(DATA_DIR, "event_organizers.json"), "utf8")
  );
} catch (err) {}

const sendJSON = (res, statusCode, data) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

const getBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
    req.on("error", (err) => reject(err));
  });
};

const server = http.createServer(async (req, res) => {
  const { method, url } = req;
  const urlObj = new URL(url, `http://${req.headers.host}`);
  const pathname = urlObj.pathname;

  if (method === "GET" && pathname.match(/^\/api\/users\/(\d+)$/)) {
    const userId = parseInt(pathname.match(/^\/api\/users\/(\d+)$/)[1], 10);
    const user = users.find((u) => u.id === userId);

    if (user) {
      sendJSON(res, 200, {
        id: user.id,
        username: user.username,
        createdAt: user.createdAt,
      });
    } else {
      sendJSON(res, 404, { error: "User not found" });
    }
  } else if (method === "GET" && pathname === "/api/events") {
    const sortedEvents = [...events].sort((a, b) => b.id - a.id);
    const result = sortedEvents.map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      venueId: event.venueId,
    }));
    sendJSON(res, 200, result);
  } else if (method === "POST" && pathname === "/api/events/register") {
    const body = await getBody(req);
    const { userId, eventId } = body;

    const userExists = users.some((u) => u.id === userId);
    const eventExists = events.some((e) => e.id === eventId);

    if (!userExists || !eventExists) {
      sendJSON(res, 400, { error: "Invalid userId or eventId" });
    } else {
      registrations.push({
        userId,
        eventId,
        registeredAt: new Date().toISOString().split("T")[0],
      });
      sendJSON(res, 200, { message: "User registered to event successfully" });
    }
  } else if (
    method === "GET" &&
    pathname.match(/^\/api\/users\/(\d+)\/events$/)
  ) {
    const userId = parseInt(
      pathname.match(/^\/api\/users\/(\d+)\/events$/)[1],
      10
    );
    const userExists = users.some((u) => u.id === userId);

    if (!userExists) {
      sendJSON(res, 404, { error: "No events found for the user" });
    } else {
      const userRegistrations = registrations.filter(
        (r) => r.userId === userId
      );
      if (userRegistrations.length === 0) {
        sendJSON(res, 404, { error: "No events found for the user" });
      } else {
        const registeredEvents = userRegistrations
          .map((r) => {
            return events.find((e) => e.id === r.eventId);
          })
          .filter((e) => e !== undefined);
        sendJSON(res, 200, registeredEvents);
      }
    }
  } else if (
    method === "GET" &&
    pathname.match(/^\/api\/users\/(\d+)\/managed-events$/)
  ) {
    const userId = parseInt(
      pathname.match(/^\/api\/users\/(\d+)\/managed-events$/)[1],
      10
    );
    const userExists = users.some((u) => u.id === userId);

    if (!userExists) {
      sendJSON(res, 404, { error: "User not found" });
    } else {
      const managed = event_organizers.filter((o) => o.userId === userId);
      if (managed.length === 0) {
        res.writeHead(204);
        res.end();
      } else {
        const managedEvents = managed
          .map((o) => {
            const evt = events.find((e) => e.id === o.eventId);
            if (!evt) return null;
            return {
              id: evt.id,
              title: evt.title,
              description: evt.description,
              startDate: evt.startDate,
              endDate: evt.endDate,
              venueId: evt.venueId,
            };
          })
          .filter((e) => e !== null);

        sendJSON(res, 200, { userId, managedEvents });
      }
    }
  } else if (method === "GET" && pathname === "/api/events/search-by-date") {
    const startDate = urlObj.searchParams.get("startDate");
    const endDate = urlObj.searchParams.get("endDate");
    const sorted = urlObj.searchParams.get("sorted");

    const filtered = events.filter((e) => {
      return e.startDate <= endDate && e.endDate >= startDate;
    });

    if (filtered.length === 0) {
      sendJSON(res, 404, { error: "No events found in the specified period" });
    } else {
      if (sorted) {
        const [field, direction] = sorted.split("_");
        filtered.sort((a, b) => {
          if (direction === "ASC") {
            return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
          } else {
            return a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0;
          }
        });
      }
      const result = filtered.map((e) => ({
        id: e.id,
        title: e.title,
        description: e.description,
        startDate: e.startDate,
        endDate: e.endDate,
        venueId: e.venueId,
      }));
      sendJSON(res, 200, result);
    }
  } else if (
    method === "POST" &&
    pathname === "/api/events/complex-conflict-check"
  ) {
    const body = await getBody(req);
    const { startDate, endDate, venueId, expectedAttendees } = body;

    const venue = venues.find((v) => v.id === venueId);
    if (!venue) {
      sendJSON(res, 404, { error: "Venue not found" });
      return;
    }

    if (expectedAttendees > venue.capacity) {
      const venueEvents = events
        .filter((e) => e.venueId === venueId)
        .map((e) => ({
          id: e.id,
          title: e.title,
          description: e.description,
          startDate: e.startDate,
          endDate: e.endDate,
          venueId: e.venueId,
        }));

      sendJSON(res, 200, {
        message: "Capacity conflict detected due to venue's limited capacity",
        conflict: true,
        type: "capacity",
        venue: { id: venue.id, name: venue.name, capacity: venue.capacity },
        conflictingEvents: venueEvents,
      });
      return;
    }

    const timeConflicting = events
      .filter((e) => {
        return (
          e.venueId === venueId &&
          e.startDate <= endDate &&
          e.endDate >= startDate
        );
      })
      .map((e) => ({
        id: e.id,
        title: e.title,
        description: e.description,
        startDate: e.startDate,
        endDate: e.endDate,
        venueId: e.venueId,
      }));

    if (timeConflicting.length > 0) {
      sendJSON(res, 200, {
        message: "Time conflict detected with another event",
        conflict: true,
        type: "time",
        conflictingEvents: timeConflicting,
      });
    } else {
      sendJSON(res, 200, {
        message: "No conflict detected",
        conflict: false,
      });
    }
  } else {
    sendJSON(res, 404, { message: "Not Found" });
  }
});

const PORT = 5678;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
