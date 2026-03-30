function solution(name, yearning, photo) {
  const map = new Map();
  for (let i in name) {
    map.set(name[i], yearning[i]);
  }
  return photo.map((e) => {
    return e.reduce((acc, cur) => {
      return acc + (map.get(cur) || 0);
    }, 0);
  });
}

// map 구조로 key로 값을 검색해서 더하기
// 챗지피티
// reduce파트를
// if(map.has(cur)) return acc+ map.get(cur)
// return acc
// 말고
// return acc + (map.get(cur) || 0)
// 로 한 줄로 정리
// ||자체가 있다면?의 의미라서
