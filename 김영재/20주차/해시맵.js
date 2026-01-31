function solution(arr) {
    const keymap = {}
    arr.forEach(element => {
        keymap[element] = (keymap[element] || 0) + 1
    });
    return keymap;
}

console.log(solution(["shoes", "pants", "shoes", "hat", "shoes", "pants"]
));