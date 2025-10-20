
function solution(cacheSize, cities) {
     if (cacheSize === 0) return cities.length * 5; 
    caches = Array(cacheSize).fill('')
    return cities.reduce((acc, el) => {
        
        el = el.toLowerCase()
        i = caches.indexOf(el)
        if (i == -1) {
            caches.shift()
            caches.push(el)
            return acc + 5;
        }
        else {
            caches.splice(i, 1)
            caches.push(el)
            return acc + 1
        }
    }, 0);
}

console.log(solution(3,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));

console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
