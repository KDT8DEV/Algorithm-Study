function solution(arr, delete_list) {
  return arr.filter((v) => !delete_list.includes(v));
}

// set 버전
function solution(arr, delete_list) {
  const set = new Set(delete_list);
  return arr.filter((v) => !set.has(v));
}

// 문제풀이
// filter로 arr 순회하면서 delete_list에 있으면 제거, 없으면 유지
// set 버전은 delete_list를 set으로 만들어서 contains를 더 빠르게 찾음
