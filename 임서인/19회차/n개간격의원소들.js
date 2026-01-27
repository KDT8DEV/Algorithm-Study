function solution(num_list, n) {
    const result = [];
    for (let i = 0; i < num_list.length; i += n) {
        result.push(num_list[i]);
    }
    return result;
}
// n 간격으로 num_list의 원소들을 추출하여 새로운 배열을 만듦