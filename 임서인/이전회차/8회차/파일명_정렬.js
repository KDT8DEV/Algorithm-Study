// https://school.programmers.co.kr/learn/courses/30/lessons/17686

// 문자열
const arr = ['b', 'A', 'c', 'a'];
arr.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
console.log(arr); // ['a', 'A', 'b', 'c'] → 대소문자 구분 없이 알파벳순

// 숫자
const nums = [10, 2, 30, 1];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 10, 30]

// "숫자" 문자열
const numStrs = ['10', '2', '30', '1'];
numStrs.sort((a, b) => Number(a) - Number(b));
console.log(numStrs); // ['1', '2', '10', '30']

// 문자 + 숫자
const items1 = ['a2', 'a10', 'a1', 'b3', 'b12', 'b2'];
const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
});
items1.sort(collator.compare);
console.log(items1); // ['a1', 'a2', 'a10', 'b2', 'b3', 'b12']

// 정규식으로 구분하기
function naturalCompare(x, y) {
  const xt = String(x).match(/(\d+|\D+)/g) || [];
  const yt = String(y).match(/(\d+|\D+)/g) || [];
  const len = Math.max(xt.length, yt.length);

  for (let i = 0; i < len; i++) {
    const a = xt[i],
      b = yt[i];
    if (a == null) return -1;
    if (b == null) return 1;

    const an = /^\d+$/.test(a),
      bn = /^\d+$/.test(b);
    if (an && bn) {
      const na = Number(a),
        nb = Number(b);
      if (na !== nb) return na - nb;
    } else {
      const cmp = a.localeCompare(b, undefined, { sensitivity: 'base' });
      if (cmp !== 0) return cmp;
    }
  }
  return 0;
}
const items = ['a2', 'a10', 'a1', 'b3', 'b12', 'b2'];
items.sort(naturalCompare);
console.log(items); // ['a1', 'a2', 'a10', 'b2', 'b3', 'b12']

function solution(files) {
  const collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
  });

  return files.sort((a, b) =>
    collator.compare(a.replace(/\.[^.]+$/, ''), b.replace(/\.[^.]+$/, ''))
  );
}
function solution(files) {
  //return files.sort((a, b) => a.localeCompare(b, 'ko', { numeric: true, sensitivity: 'base' }));
  const collator = new Intl.Collator('ko', {
    numeric: true,
    sensitivity: 'base',
  });
  //  files.sort(collator.compare);
  // collator.compare(x, y)
  // 문자열 x와 y를 로케일 규칙(여기서는 numeric: true, sensitivity: 'base')에 따라 비교합니다.
  // 정렬용 comparator로 그대로 쓸 수 있어요. 음수(앞), 0(같음), 양수(뒤)를 반환합니다.
  return files.sort((a, b) =>
    collator.compare(a.replace(/\.[^.]+$/, ''), b.replace(/\.[^.]+$/, ''))
  );
  //정규식 설명:
  // . : 리터럴 점(.) 하나
  // [^.]+ : 점(.)이 아닌 문자 1개 이상
  // $ : 문자열 끝
  // 즉, "마지막 점 + 그 뒤의 점 아닌 문자들(=확장자) + 문자열 끝" 패턴을 찾아서
  // replace(..., '')로 빈 문자열로 치환 → 확장자 제거
  // 참고: "file.tar.gz"처럼 확장자가 여러 개인 경우 마지막 ".gz"만 지워져 "file.tar"가 남습니다.
}
// title number tail 분류가 안되어서
// 머,, 숫자가 문자뒤에 또 온다거나
// 글자수가 다르다거나
// 암튼 비교가 저 끝까지 됨 확장자명까지

// 지피티햄
function solution(files) {
  return files.sort((a, b) => {
    // 1 HEAD와 NUMBER를 분리하기 위한 정규식
    // - ^ : 문자열 시작
    // - ([^\d]+) : 숫자가 아닌 문자(HEAD)를 최소 1개 이상 캡처
    // - (\d{1,5}) : 숫자를 1~5자리까지만 캡처 (NUMBER)
    const regex = /^([^\d]+)(\d{1,5})/;
    // i붙이면 대소문자 구분 안한다는뜻
    //
    // 부분	의미	예시 입력 "img12.png"일 때
    // ^	문자열의 시작을 뜻함	"i"부터 시작
    // ([^\d]+)	숫자가 아닌 문자를 하나 이상 찾아서 그룹 1로 묶음	"img"
    // (\d{1,5})	숫자를 1~5개 찾아서 그룹 2로 묶음	"12"

    // 2 각각의 파일명을 HEAD / NUMBER로 분리
    // 예: "img12.png" → headA="img", numA="12"
    const [, headA, numA] = a.match(regex);
    const [, headB, numB] = b.match(regex);

    // match의 결과 값은 [전체, head, number]
    // 전체는 필요없으니 건너뛰기

    // 3 HEAD를 대소문자 구분 없이 비교
    // localeCompare()는 문자열을 사전순으로 비교하는 메서드
    // → HEAD가 다르면 그 결과를 그대로 반환
    // a가 b의 -1 앞에 옴 1 뒤에 옴 0 같음
    const headComp = headA.toLowerCase().localeCompare(headB.toLowerCase());
    if (headComp !== 0) return headComp;
    // localeCompare()는 문자열의 기본 내장 메서드
    // Intl.Collator는 같은 기능을 더 정교하게 컨트롤할 수 있는 고급 API

    // 4 HEAD가 같으면 NUMBER(숫자 부분) 비교
    // parseInt()로 정수 변환하여 숫자 크기 비교
    const numberComp = parseInt(numA, 10) - parseInt(numB, 10);
    if (numberComp !== 0) return numberComp;

    // 5 HEAD와 NUMBER 모두 같으면
    // 문제 조건에 따라 "입력 순서 그대로" 유지해야 하므로 0 반환
    // (ECMAScript 2019 이상에서는 sort가 안정 정렬이므로 순서 유지됨)
    return 0;
  });
}

// 지피티햄
function solution(files) {
  return files.sort((a, b) => {
    const regex = /^([^\d]+)(\d{1,5})/;

    const [, headA, numA] = a.match(regex);
    const [, headB, numB] = b.match(regex);

    const headComp = headA.toLowerCase().localeCompare(headB.toLowerCase());
    if (headComp !== 0) return headComp;

    const numberComp = parseInt(numA, 10) - parseInt(numB, 10);
    if (numberComp !== 0) return numberComp;

    return 0;
  });
}

let files = [
  'img12.png',
  'img10.png',
  'img02.png',
  'img1.png',
  'IMG01.GIF',
  'img2.JPG',
];
console.log(solution(files));
