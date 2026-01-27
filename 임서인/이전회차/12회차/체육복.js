function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let filterLost = lost.filter((e) => !reserve.includes(e));
  let filterReserve = reserve.filter((e) => !lost.includes(e));

  let answer = n - filterLost.length;
  filterLost.forEach((e) => {
    if (filterReserve.includes(e - 1)) {
      filterReserve.splice(filterReserve.indexOf(e - 1), 1);
      answer++;
    } else if (filterReserve.includes(e + 1)) {
      filterReserve.splice(filterReserve.indexOf(e + 1), 1);
      answer++;
    }
  });

  return answer;
}
