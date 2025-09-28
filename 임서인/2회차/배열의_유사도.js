// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 문제 설명
// 두 배열이 얼마나 유사한지 확인해보려고 합니다.
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

// 첫번째 시도
/*
solution=(s1,s2,same=0)=>{
    s1.forEach((cur)=>{
        s2.forEach((el)=>{
            if(cur===el) {
                same +=1;
                console.log(same);
            };
        })
    })
    return same;
}
*/
//

// 정답
solution = (s1, s2) => {
  return s1.filter((e) => s2.includes(e)).length;
};
// has함수는 Set 이나 Map 객체에만 쓸 수 있음
