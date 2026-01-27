function solution(my_string, index_list) {
    let result = '';
    for (let i = 0; i < index_list.length; i++) {
        result += my_string[index_list[i]];
    }
    return result;
}
// my_string에서 index_list에 해당하는 인덱스의 문자들을 이어붙여 반환하는 함수

function solution(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('');
}