/*function solution(players, m, k) {
    let 증설횟수 =players.reduce((acc,cur,idx)=>{
        if(cur>=m){
            let 증설된서버수+=Math.floor(cur/m)
            return acc += 증설된서버수
        }else{
            
        }
    },0)
   return 증설횟수
}

// n 서버개수
// m  서버 한 대가 감당가능한 사용자 수 
// 증설 서버 수 = Math.floor(이용자수 /m)


function solution(players, m, k) {
  let totalAdd = 0;   // 하루 동안 총 증설 횟수
  let alive = 0;      // 지금 살아 있는 증설 서버 수
  let expire = Array(players.length + k + 1).fill(0); 
  // expire[t] = t시에 사라질 서버 수

  for (let i = 0; i < players.length; i++) {

    // 1) 만료 처리
    alive -= expire[i];

    // 2) 이 시간에 필요한 증설 서버 수
    let need = Math.floor(players[i] / m);

    // 3) 지금 서버가 부족한지 확인
    if (alive < need) {
      let add = need - alive;

      totalAdd += add;   // 증설 횟수 누적
      alive += add;      // 현재 살아 있는 서버 증가

      // 4) 이 서버들은 i + k 시간에 만료됨
      expire[i + k] += add;
    }

    // 힌트:
    // 여기서 핵심은:
    // - alive: 지금 쓸 수 있는 증설 서버
    // - need: 지금 필요한 증설 서버
    // - 부족할 때만 add
    // - add한 서버는 i+k에 사라지도록 예약
  }

  return totalAdd;
}*/
function solution(players, m, k) {
  let totalAdd = 0; // 총 증설 횟수
  let alive = 0; // 현재 살아 있는 증설 서버 수
  let expire = Array(players.length + k + 1).fill(0); // expire[t] = t시에 만료될 서버 수

  for (let i = 0; i < players.length; i++) {
    // 1) k시간 지난 서버 반납
    alive -= expire[i];

    // 2) 이 시간에 필요한 증설 서버 수
    let need = Math.floor(players[i] / m);

    // 3) 부족하면 증설
    if (alive < need) {
      let add = need - alive;
      totalAdd += add;
      alive += add;

      // 4) 이 서버들은 i+k 시간에 사라짐
      expire[i + k] += add;
    }
  }

  return totalAdd;
}
