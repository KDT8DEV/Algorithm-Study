function solution(a, b) {
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    const g = gcd(a, b);
    const l = (a * b) / g;

    return [g, l];
}