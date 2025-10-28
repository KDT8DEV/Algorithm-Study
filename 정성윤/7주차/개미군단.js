function solution(hp) {
  let general = Math.floor(hp / 5); 
  hp %= 5;                          
  let soldier = Math.floor(hp / 3); 
  hp %= 3;                          
  let worker = hp;                  

  return general + soldier + worker;
}

console.log(solution(23));
