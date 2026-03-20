/**문제 설명
카카오톡은 메시지의 일부를 가려두었다가, 클릭했을 때만 공개되는 스포 방지 기능을 제공합니다. 
이 기능을 활용하면 중요한 정보를 가리고 보낼 수 있습니다.

무지는 이 기능을 이용해 하나의 메시지 곳곳에 스포 방지 기능을 적용해 당신에게 보냈습니다. 
당신은 메시지 시작부터 왼쪽 → 오른쪽 순서로 스포 방지 구간을 하나씩 클릭해 공개되는 단어들 중, 중요한 단어가 몇 개인지 확인하려 합니다.

단어 및 중요한 단어 규칙

단어는 공백으로 구분되며, 알파벳 소문자와 숫자로만 구성된 연속된 문자열입니다.
단어를 구성하는 문자들의 인덱스 중 하나 이상이 스포 방지 구간에 포함될 경우, 해당 단어는 스포일러 방지 단어로 간주합니다. 
즉, 단어 내 일부 문자에만 스포일러 방지 기능이 적용되더라도, 해당 단어 전체를 스포일러 방지 단어로 간주합니다.
한 단어가 여러 개의 스포 방지 구간에 걸쳐 있을 수 있으며, 하나의 스포 방지 구간에 여러 단어가 포함될 수 있습니다.
스포 방지 구간을 클릭해 단어의 모든 문자가 공개되었을 때, 그 단어가 아래 조건을 모두 만족하면 중요한 단어입니다.
스포 방지 단어여야 합니다.
메시지의 스포 방지 구간이 아닌 구간(= 어떤 스포 방지 구간에도 속하지 않는 모든 구간: 각 구간의 앞·사이·뒤 포함)에 등장한 적이 없어야 합니다.
이전에 공개된 스포 방지 단어와 중복되지 않아야 합니다.
여러 단어가 동시에 공개된 경우, 왼쪽부터 순서대로 하나씩 중요한 단어인지 판단합니다.
무지가 당신에게 보내온 메시지를 나타내는 문자열 message와 스포 방지가 적용된 구간을 나타내는 2차원 정수 배열 spoiler_ranges가 매개변수로 주어질 때, 
스포 방지 단어 중 중요한 단어의 수를 return 하도록 solution 함수를 완성해 주세요.
 */

/**나의 풀이 */
function solution(message, spoiler_ranges) {
  // // 단어와 범위 저장
  // let words = [];
  // let start = -1;

  // for (let i = 0; i < message.length; i++) {
  //   // 단어 시작
  //   if (message[i] !== " " && start === -1) {
  //     start = i;
  //   }

  //   // 단어 끝
  //   if ((message[i] === " " || i === message.length - 1) && start !== -1) {
  //     let end = message[i] === " " ? i - 1 : i;
  //     words.push({
  //       word: message.slice(start, end + 1),
  //       start: start,
  //       end: end,
  //     });
  //     start = -1;
  //   }
  // }

  // 정규식 풀이
  const words = [...message.matchAll(/[a-z0-9]+/g)].map((match) => {
    const word = match[0];
    const start = match.index;
    const end = start + word.length - 1;

    return { word, start, end };
  });

  // 각 문자 인덱스의 스포 여부
  let covered = new Array(message.length).fill(false);

  // 스포 구간 표시
  for (let [s, e] of spoiler_ranges) {
    for (let i = s; i <= e; i++) {
      covered[i] = true;
    }
  }

  // 스포 단어 / 공개 단어 분리
  let spoilerWords = new Set();
  let normalWords = new Set();

  for (let { word, start, end } of words) {
    let isSpoiler = false;

    // 한 글자라도 스포면 스포 단어
    for (let i = start; i <= end; i++) {
      if (covered[i]) {
        isSpoiler = true;
        break;
      }
    }

    if (isSpoiler) {
      spoilerWords.add(word);
    } else {
      normalWords.add(word);
    }
  }

  // 중요한 단어 개수 세기
  let count = 0;
  let counted = new Set();

  for (let { word } of words) {
    if (
      spoilerWords.has(word) &&
      !normalWords.has(word) &&
      !counted.has(word)
    ) {
      count++;
      counted.add(word);
    }
  }

  return count;
}

let message = "my phone number is 01012345678 and may i have your phone number";
let spoiler_ranges = [
  [5, 5],
  [25, 28],
  [34, 40],
  [53, 59],
];

console.log(solution(message, spoiler_ranges));

//=================================================//
// let message = "my phone number is 01012345678 and may i have your phone number";
// let spoiler_ranges = [
//   [5, 5],
//   [25, 28],
//   [34, 40],
//   [53, 59],
// ]; // 4

// // 1. 단어별 start, end, word 구하기
// // 2. 전체 길이만큼 covered 배열 만들기
// // 3. spoiler_ranges 반영해서 covered 표시
// // 4. 각 단어가 스포 단어인지 / 일반 단어인지 분류
// // 5. 클릭 순서대로 공개 처리

// let words = [];
// let start = -1;

// for (let i = 0; i < message.length; i++) {
//   //단어 시작
//   if (message[i] !== " " && start === -1) {
//     start = i;
//   }
//   // 단어 끝
//   if ((message[i] === " " || i === message.length - 1) && start !== -1) {
//     let end = message[i] === " " ? i - 1 : i;
//     words.push({
//       word: message.slice(start, end + 1),
//       start: start,
//       end: end,
//     });
//     start = -1;
//   }
// }

// console.log(words);

// let covered = new Array(message.length).fill(false);

// for (let [s, e] of spoiler_ranges) {
//   for (let i = s; i <= e; i++) {
//     covered[i] = true;
//   }
// }

// console.log(covered);

// let spoilerWords = new Set();
// let normalWords = new Set();

// for (let { word, start, end } of words) {
//   let isSpoiler = false;

//   for (let i = start; i <= end; i++) {
//     if (covered[i]) {
//       isSpoiler = true;
//       break;
//     }
//   }

//   if (isSpoiler) {
//     spoilerWords.add(word);
//   } else {
//     normalWords.add(word);
//   }
// }

// console.log(spoilerWords);
// console.log(normalWords);

// let count = 0;
// let counted = new Set();

// for (let { word } of words) {
//   if (spoilerWords.has(word) && !normalWords.has(word) && !counted.has(word)) {
//     count++;
//     counted.add(word);
//   }
// }

// console.log(count);
