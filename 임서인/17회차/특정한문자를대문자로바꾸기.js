function solution(my_string, alp) {
  return my_string
    .split('')
    .map((e) => {
      if (e == alp) return e.toUpperCase();
      return e;
    })
    .join('');
}

// 다른사람풀이
// const solution=(s,a)=>s.replaceAll(a,a.toUpperCase())

// 함수설명
// replaceAll 메서드는 문자열 내의 특정 문자열을 모두 찾아 다른 문자열로 대체합니다.
