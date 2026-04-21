/*
 * 문제 설명
 * 머쓱이는 프로그래머스에 로그인하려고 합니다.
 * 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
 * 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.
 *
 * • 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
 * • 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 "fail"를,
 *   아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 "wrong pw"를 return합니다.
 *
 * 제한사항
 * • 회원들의 아이디는 알파벳 소문자와 숫자로만 이루어져 있습니다.
 * • 회원들의 패스워드는 숫자로 구성된 문자열입니다.
 * • 1 ≤ 아이디의 길이 ≤ 15
 * • 1 ≤ 비밀번호의 길이 ≤ 6
 * • 1 ≤ db의 길이 ≤ 10
 */
function solution(id_pw, db) {
  const [id, pw] = id_pw;

  let message = '';
  for (const [userId, userPw] of db) {
    if (userId === id && userPw === pw) {
      message = 'login';
      break;
    } else if (userId === id && userPw !== pw) {
      message = 'wrong pw';
      break;
    } else {
      message = 'fail'; // ❌ 문제!
    }
  }
  return message;
}
// 개선
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  for (const [userId, userPw] of db) {
    if (userId === id && userPw === pw) {
      return 'login';
    } else if (userId === id && userPw !== pw) {
      return 'wrong pw';
    }
  }
  return 'fail';
}
// 다른 사람의 풀이 1
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  for (const [userId, userPw] of db) {
    if (userId === id && userPw === pw) return 'login';
    else if (userId === id && userPw !== pw) return 'wrong pw';
  }
  return 'fail';
}
// 다른 사람의 풀이 2 - Map 활용
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);

  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ],
  ),
); // "login"
console.log(
  solution(
    ['programmer01', '15789'],
    [
      ['programmer02', '111111'],
      ['programmer00', '134'],
      ['programmer01', '1145'],
    ],
  ),
); // "wrong pw"
console.log(
  solution(
    ['rabbit04', '98761'],
    [
      ['jaja11', '98761'],
      ['krong0313', '29440'],
      ['rabbit00', '111333'],
    ],
  ),
); // "fail"
