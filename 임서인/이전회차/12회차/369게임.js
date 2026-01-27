function solution(order) {
  return String(order)
    .split('')
    .reduce((acc, cur) => {
      if (cur > 0 && Number(cur) % 3 == 0) {
        console.log(acc);
        return (acc += 1);
      }
      return acc;
    }, 0);
}
// 문제풀이
// order 를 문자열로 변환 후 한 글자씩 쪼갬
// reduce 로 3,6,9 개수 세기
// cur 이 0 보다 크고 3의 배수일 때 acc 1 증가
// 최종 acc 리턴

function solution1(order) {
  return ('' + order).split(/[369]/).length - 1;
}
// 문제풀이
// order 를 문자열로 변환 후 정규식으로 3,6,9 기준으로 쪼갬
// 쪼갠 배열의 길이에서 1 빼기(3,6,9 개수)
