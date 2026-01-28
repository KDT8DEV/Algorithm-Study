// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

console.log('the answer is : ' + solution([1, 2, 3, 3, 3, 4]));
console.log('the answer is : ' + solution([1, 1, 2, 2]));
console.log('the answer is : ' + solution([1]));

// n번째 도전
// solution = (arr, countModes = [], hash = {}, countMode = 0) => {
//   //  array , modes(최빈값들) hash(해시배열) mode(최빈값)
//   for (num of arr) {
//     hash[num] = (hash[num] ?? 0) + 1;
//     countModes = Object.values(hash);
//   }
//   countMode = Math.max(...countModes);

//   console.log(countMode); // 최빈값
//   console.log(countModes); // 최빈값배열
//   // 최빈값이 최빈값배열에서 여러개일 때
//   let overlap = countModes.reduce((acc, cur) => {
//     if (cur == countMode) {
//       return acc + 1;
//     }
//     return acc;
//   }, 0);
//   return overlap >= 2 ? -1 : countMode;
// };

// 1차 시도
// 틀려서 1보다 작거나 같음으로 시도
// 실패
// solution = (arr, modes = [], hash = {}, mode = 0) => {
//   //  array , modes(최빈값들) hash(해시배열) mode(최빈값)
//   for (num of arr) {
//     hash[num] = (hash[num] ?? 0) + 1;
//     modes = Object.values(hash);
//   }
//   mode = Math.max(...modes);

//   // 최빈값이 최빈값배열에서 여러개일 때
//   let countMode = modes.reduce((acc, cur) => {
//     if (cur == mode) {
//       return acc + 1;
//     }
//   }, 0);

//   console.log(countMode);
// };

// 첫번째 시도
// solution = (arr, modes = [], hash = {}, ans = 0) => {
//   //  array , modes(최빈값들) hash(해시배열) ans(정답)
//   for (num of arr) {
//     hash[num] = (hash[num] ?? 0) + 1;
//     modes = Object.values(hash);
//   }
//   ans = Math.max(...modes);

//   if (modes.filter((e) => e == ans).length <= 1) {
//     return ans;
//   } else {
//     return -1;
//   }
// };
