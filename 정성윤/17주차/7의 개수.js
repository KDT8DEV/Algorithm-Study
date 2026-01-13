function solution(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        let str = String(array[i]);

        for (let j = 0; j < str.length; j++) {
            if (str[j] === '7') {
                count++;
            }
        }
    }

    return count;
}
