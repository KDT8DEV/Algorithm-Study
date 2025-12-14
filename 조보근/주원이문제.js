function solution(menu, order, k) {
  let queue = [];
  let maxCount = 0;
  let brewEndTime = 0;

  for (let i = 0; i < order.length; i++) {
    const arrivalTime = i * k;
    const menuIdx = order[i];

    while (queue.length > 0 && brewEndTime <= arrivalTime) {
      queue.shift();

      if (queue.length > 0) {
        brewEndTime += menu[queue[0]];
      }
    }

    let hasSameMenu = false;
    for (const customer of queue) {
      if (customer.menuIdx === menuIdx) {
        hasSameMenu = true;
        break;
      }
    }

    if (hasSameMenu) {
      continue;
    }

    queue.push(menuIdx);

    if (queue.length === 1) {
      brewEndTime = arrivalTime + menu[menuIdx];
    }
    maxCount = Math.max(maxCount, queue.length);
  }

  return maxCount;
}
