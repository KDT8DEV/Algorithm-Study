function solution(a, b) {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const startDay = {
    1: 5,
    2: 1,
    3: 2,
    4: 5,
    5: 0,
    6: 3,
    7: 5,
    8: 1,
    9: 4,
    10: 6,
    11: 2,
    12: 4,
  };

  const resultIndex = (startDay[a] + (b - 1)) % 7;
  return day[resultIndex];
}

// 문제 풀이
// day 배열에 요일을 담아두고
// startDay로 각 월의 시작 요일을 담아둠
// resultIndex로 요일을 반환

//  다른풀이
function solution(a, b) {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return day[new Date(2016, a - 1, b).getDay()];
}

function getDayName(a, b) {
  var tempDate = new Date(2016, a - 1, b);

  return tempDate.toString().slice(0, 3).toUpperCase();
}

function getDayName(a, b) {
  var arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay();
  return arr[day];
}
