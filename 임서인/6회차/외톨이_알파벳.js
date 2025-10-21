// https://school.programmers.co.kr/tryouts/190154/challenges?language=javascript
// 알파벳 소문자로만 이루어진 어떤 문자열에서, 2회 이상 나타난 알파벳이 2개 이상의 부분으로 나뉘어 있으면 외톨이 알파벳이라고 정의합니다.

// 문자열 "edeaaabbccd"를 예시로 들어보면,

// a는 2회 이상 나타나지만, 하나의 덩어리로 뭉쳐있으므로 외톨이 알파벳이 아닙니다.
// "ede(aaa)bbccd"
// b, c도 a와 같은 이유로 외톨이 알파벳이 아닙니다.
// d는 2회 나타나면서, 2개의 부분으로 나뉘어 있으므로 외톨이 알파벳입니다.
// "e(d)eaaabbcc(d)"
// e도 d와 같은 이유로 외톨이 알파벳입니다.
// 문자열 "eeddee"를 예시로 들어보면,

// e는 4회 나타나면서, 2개의 부분으로 나뉘어 있으므로 외톨이 알파벳입니다.
// "(ee)dd(ee)"
// d는 2회 나타나지만, 하나의 덩어리로 뭉쳐있으므로 외톨이 알파벳이 아닙니다.
// "ee(dd)ee"
// 문자열 input_string이 주어졌을 때, 외톨이 알파벳들을 알파벳순으로 이어 붙인 문자열을 return 하도록 solution 함수를 완성해주세요. 만약, 외톨이 알파벳이 없다면 문자열 "N"을 return 합니다.

// 문제풀이 전 알고리즘 정리

// 문자열 하나씩 옆으로 넘김
// e, d, e, aaa, bb, cc, d
// 뭉탱이로 넘김

// 1. e가 나옴 => 지나감
// 2. d가 나옴 => 지나감
// 3. e가 나옴 => (이전거랑 비교해보셈 같은거 있음)? 맞음 => 직전거임? 틀림 => answer 에 저장
// 4. a가 나옴 => 지나감
// 5. a가 나옴 => (이전거랑 비교해보셈 같은거 있음)? 맞음 => 직전거임? 맞음 => 지나감
// 6. a가 나옴 => (이전거랑 비교해보셈 같은거 있음)? 맞음 => 직전거임? 맞음 => 지나감
// 7. b가 나옴 => 지나감
// 8. b가 나옴 => (이전거랑 비교해보셈 같은거 있음)? 맞음 => 직전거임? 맞음 => 지나감
// 9. c ... 이하동문
// 11.d가 나옴 => (이전 거랑 비교해보셈 같은 거 있음)? 맞음 => 직전거임? 틀림 => answer에 저장

// 필수 알고리즘
// 이전거랑 비교해보고 같으면 직전거가 아니면 answer에 저장
// answer size가 0이면 "N"반환
// answer는 abc순 sort

const solution = (input, past = '') => {
  let answer = new Set();
  input.split('').forEach((cur) => {
    console.log('cur : ' + cur);
    if (past.includes(cur)) {
      console.log('나온 적 있음');
      if (cur != past.at(-1)) {
        console.log('직전에 안나옴');
        answer.add(cur);
      } else {
        console.log('직전에 나옴');
      }
    } else {
      console.log('처음나옴');
    }
    past += cur;
    console.log('past : ' + past);
  }, '');

  return answer == undefined ? 'N' : [...answer].sort().join('');
};

console.log('정답은 ' + solution('edeaaabbccd')); // de
console.log('정답은 ' + solution('eeddee'));
console.log('정답은 ' + solution('string'));
console.log('정답은 ' + solution('zbzbz'));

// // 코드정리
// const solution = (input, past = '') => {
//   let answer = new Set();
//   input.split('').forEach((cur) => {
//     if (past.includes(cur)&& cur != past.at(-1)) {
//         answer.add(cur);
//     }
//     past += cur;
//   });
//   return answer.size?[...answer].sort().join(''):"N";
// };
