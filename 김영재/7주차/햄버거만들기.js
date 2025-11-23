function solution(s) {

    keymap = {};
    return [...s].map((el, idx) => {
        console.log();

        if (el == 1) {
            result = keymap[el] == undefined ? -1 : idx - keymap[el];


            keymap[el] = idx;
            return result;
        }
        return 0
    })
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
