function solution(arr, delete_list) {
  return arr.filter((v) => !delete_list.includes(v));
}

// 문제 풀이
// filter를 사용해서 delete_list에 포함되지 않은 값만 남겨서 반환

// Set을 사용해서 더 빠르게 풀 수도 있음

function solution(arr, delete_list) {
  const deleteSet = new Set(delete_list);
  return arr.filter((v) => !deleteSet.has(v));
}

// Set은 중복을 허용하지 않고, 값을 빠르게 찾을 수 있음
// delete_list를 Set으로 만들면 includes()보다 has()가 더 빠름
