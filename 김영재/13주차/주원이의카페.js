function solution(menu, order, k) {
    let waitingArr = [];
    let currentEnd=0;
    order.forEach((el, idx) => {
        let start = idx * k;
        let end = Math.max(currentEnd, start) + menu[el]; 
        waitingArr.push([start, end]);
        currentEnd=end;
    });

    let events = [];
    for (let [start, end] of waitingArr) {
        events.push([start, +1]); 
        events.push([end, -1]);   
    } 
    events.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    let current = 0, maxPeople = 0;
    for (let [_, customer] of events) {
        current += customer;
        maxPeople = Math.max(maxPeople, current);
    }
    return maxPeople;
}