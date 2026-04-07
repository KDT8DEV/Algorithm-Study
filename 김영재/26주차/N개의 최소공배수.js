function solution(arr) {
    function gcd(a, b) {
        while (b !== 0) {
            const temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    return arr.reduce((acc, cur) => lcm(acc, cur));
}
