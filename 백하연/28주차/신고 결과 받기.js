/*
 * 신고 결과 받기
 * 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 * 정지된 유저를 신고한 유저는 정지된 유저의 처리 결과 메일을 받게 된다.
 */
function solution(id_list, report, k) {
  // 먼저 중복 없이 누가 누구를 신고했는지 저장
  // 그다음 그 정보를 바탕으로 피신고자별 신고 횟수 계산
  // 정지된 사람만 골라서 메일 수 계산

  /**
   *
  report를 돌면서 신고자 -> Set(피신고자) 형태로 저장
그 저장된 값을 순회하면서 피신고자 -> 신고당한 횟수를 카운트
신고당한 횟수가 k 이상인 사람만 정지
다시 신고자 -> Set(피신고자)를 보면서, 그 안에 정지된 사람이 몇 명 있는지 세기
그 개수를 id_list 순서대로 배열에 담기
   */
  const reportMap = new Map();
  report.forEach((r) => {
    const [reporter, reported] = r.split(' ');
    if (!reportMap.has(reporter)) {
      reportMap.set(reporter, new Set());
    }
    reportMap.get(reporter).add(reported);
  });

  const countMap = new Map();
  for (const [reporter, reported] of reportMap) {
    for (const user of reported) {
      countMap.set(user, (countMap.get(user) || 0) + 1);
    }
  }

  const suspendedUsers = [];
  const result = new Array(id_list.length).fill(0);

  for (const [user, count] of countMap) {
    if (count >= k) {
      // 정지된 유저
      suspendedUsers.push(user);
    }
  }

  for (const [reporter, reported] of reportMap) {
    for (const user of reported) {
      if (suspendedUsers.includes(user)) {
        const index = id_list.indexOf(reporter);
        result[index]++;
      }
    }
  }

  return result;
}

// 다른 사람의 풀이
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((x) => x.split(' '));
  let counts = new Map();

  for (const [reporter, reported] of reports) {
    counts.set(reported, (counts.get(reported) || 0) + 1);
  }

  let suspended = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      suspended.set(report[0], suspended.get(report[0]) + 1 || 1);
    }
  }

  return id_list.map((x) => suspended.get(x) || 0);
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2,
  ),
); // [2, 1, 1, 0]
console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)); // [0, 0]
