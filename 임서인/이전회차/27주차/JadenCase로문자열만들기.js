function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      if (word.length === 0) return word; // 연속 공백으로 생긴 빈 문자열 그대로 유지
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

// 풀이
// split(' ')으로 공백 기준 분리 (연속 공백은 빈 문자열로 보존됨)
// 각 단어의 첫 글자만 대문자, 나머지는 소문자
// join(' ')으로 다시 합치기

// split(' ')을 쓰면 "hello  world" → ["hello", "", "world"]
// 빈 문자열을 그대로 유지하면 join 시 공백이 보존됨

// 테스트
// console.log(solution('3people unFollowed me')); // "3people Unfollowed Me"
// console.log(solution('for the last week')); // "For The Last Week"
// console.log(solution('hello  world')); // "Hello  World" (공백 2개 유지)
// console.log(solution('1 a')); // "1 A"
