function solution(numbers) {

    const allNumbers = Array.from({ length: 10 }, (_, i) => i); // [0,1,2,...,9]

    return allNumbers.reduce((acc, cur) => {
        if (!numbers.includes(cur)) {
            return acc+cur
        }
        return acc
    },0);
}