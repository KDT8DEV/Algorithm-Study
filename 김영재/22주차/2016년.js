function solution(a, b) {
    let c = new Date(2016, a - 1, b)
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[c.getDay()];


}
console.log(solution(5, 24));
