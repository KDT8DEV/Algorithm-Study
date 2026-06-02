function solution(survey, choices) {
  let answer = "";
  let types = ["RT", "CF", "JM", "AN"];
  let score = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  let character = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    let left = survey[i][0];
    let right = survey[i][1];
    if (choices[i] <= 3) {
      character[left] += score[choices[i]];
    } else if (choices[i] >= 5) {
      character[right] += score[choices[i]];
    } else {
      continue;
    }
  }

  for (let type of types) {
    let left = type[0];
    let right = type[1];

    if (character[left] >= character[right]) {
      answer += left;
    } else {
      answer += right;
    }
  }
  //     if(character['R'] >= character['T']){
  //         answer += 'R';
  //     }else{
  //         answer += 'T';
  //     }

  //     if(character['C'] >= character['F']){
  //         answer += 'C';
  //     }else{
  //         answer += 'F';
  //     }

  //     if(character['J'] >= character['M']){
  //         answer += 'J';
  //     }else{
  //         answer += 'M';
  //     }

  //     if(character['A'] >= character['N']){
  //         answer += 'A';
  //     }else{
  //         answer += 'N';
  //     }

  return answer;
}
