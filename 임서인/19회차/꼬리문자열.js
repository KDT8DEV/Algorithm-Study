function solution(str_list, ex) {
  return str_list.filter((s) => !s.includes(ex)).join('');
}
// includes를 사용하여 문자열에 특정 문자열이 포함되어 있는지 확인하고
// filter를 사용하여 포함되지 않은 문자열만 남긴 후 join으로 합침
