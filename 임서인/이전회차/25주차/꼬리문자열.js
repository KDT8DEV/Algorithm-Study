function solution(str_list, ex) {
  return str_list.filter((e) => !e.includes(ex)).join('');
}

// filter()로 ex를 포함하지 않는 문자열만 필터링
// join("")으로 합치기
