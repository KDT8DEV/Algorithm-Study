function solution(num_list) {
    const last = Number(num_list.at(-1));
    const last2 = Number(num_list.at(-2));
    last>last2?num_list.push(last-last2):num_list.push(last*2);
    return num_list
}
// at(-1) at(-2)로 접근하여 계산

function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}

// 스프레드 연산자와 구조분해할당을 통해 계산