function solution1(command) {
  let comm = command.split('');
  let location = [0, 0];
  // let [up,down,right,left] = [y+1,y-1,x+1,x-1];
  // let directions = [
  //   { dir: 'up', func: () => (location[1] = location[1] + 1) },
  //   { dir: 'right', func: () => (location[0] = location[0] + 1) },
  //   { dir: 'down', func: () => (location[1] = location[1] - 1) },
  //   { dir: 'left', func: () => (location[0] = location[0] - 1) },
  // ];
  // let directions = ['up', 'right', 'down', 'left'];

  let plusMinus = ['minus', 'plus'];
  let locaFlag = true; // x냐 y냐
  let signFlag = true; // -냐 +냐

  // directions[0].dir;
  // console.log(directions.at(flag));
  // console.log(flag);
  // console.log(location);
  let locationPlus = (num) => {
    location[num] = location[num] + 1;
  };
  let locationMinus = (num) => {
    location[num] = location[num] - 1;
  };
  return comm.forEach((alpha, i) => {
    if ((alpha = 'G')) {
      switch (flag) {
        case true:
          locationPlus(1);
          break;
        case false:
          locationPlus(0);
          break;
      }
    } else if ((alpha = 'B')) {
    } else if ((alpha = 'L')) {
    } else if ((alpha = 'R')) {
    }
    if (i == comm.length) {
    }
  }, []);
}
// 기본값
// y+1
// R x+1    L x-1
// R y-1    L y-1
// R x-1    L x+1

// 현재상태의 반대의 숫자가 됨 [0]이면 [1]이되고
// false 면 0이고 true면 1이다
// up이면 R일때 flag 반대가되고 +1 L이면 -1

// flag +1해서
function solution2(command) {
  let comm = command.split('');
  let location = [0, 0];

  let locaFlag = true; // true y냐 false x냐
  let signFlag = true; // +냐 -냐

  let locationChange = (loca, sign) => {
    if (sign) {
      location[loca] = location[loca] + 1;
    } else {
      location[loca] = location[loca] - 1;
    }
  };

  comm.forEach((alpha) => {
    if (alpha == 'G') {
      if (signFlag) {
        locationChange(Number(locaFlag), signFlag);
      } else {
        locationChange(Number(locaFlag), !signFlag);
      }
    } else if ((alpha = 'B')) {
      if (signFlag) {
        locationChange(Number(locaFlag), !signFlag);
      } else {
        locationChange(Number(locaFlag), signFlag);
      }
    } else if (alpha == 'L') {
      locaFlag = !locaFlag;
      if (!locaFlag) {
        signFlag = !signFlag;
      }
    } else if ((alpha = 'R')) {
      locaFlag = !locaFlag;
      if (!locaFlag) {
        signFlag = !signFlag;
      } else {
        locaFlag = !locaFlag;
        signFlag = !signFlag;
      }
    }
  });
  return location;
}

function solutionAnswer(command) {
  let comm = command.split('');
  let location = [0, 0];

  let locaFlag = true; // true y냐 false x냐
  let signFlag = true; // true +냐 false -냐

  let locationChange = (loca, sign) => {
    if (sign) {
      // + 방향이면
      location[loca] = location[loca] + 1;
    } else {
      // - 방향이면
      location[loca] = location[loca] - 1;
    }
  };

  comm.forEach((alpha) => {
    if (alpha == 'G') {
      locationChange(Number(locaFlag), signFlag);
    } else if (alpha == 'B') {
      locationChange(Number(locaFlag), !signFlag);
    } else if (alpha == 'L') {
      locaFlag = !locaFlag;
      if (!locaFlag) {
        // y축일 떄
        signFlag = !signFlag;
      }
    } else if (alpha == 'R') {
      locaFlag = !locaFlag;
      if (!locaFlag == false) {
        // x축일 때
        signFlag = !signFlag;
      }
    }
    console.log(locaFlag, signFlag, location);
  });
  return location;
}

// 리팩토링 버전
function solution(commandList) {
  let commands = commandList.split('');
  let location = [0, 0];

  let isDirectionY = true; // true y냐 false x냐
  let isAxisPlus = true; // true +냐 false -냐

  let move = (XorY, PorM) => {
    location[XorY] += PorM ? +1 : -1;
  };

  commands.forEach((command) => {
    if (command == 'G') {
      move(Number(isDirectionY), isAxisPlus);
    } else if (command == 'B') {
      move(Number(isDirectionY), !isAxisPlus);
    } else if (command == 'L') {
      isDirectionY = !isDirectionY;
      if (!isDirectionY) {
        isAxisPlus = !isAxisPlus;
      }
    } else if (command == 'R') {
      isDirectionY = !isDirectionY;
      if (!isDirectionY == false) {
        isAxisPlus = !isAxisPlus;
      }
    }
  });
  return location;
}

console.log(solution('GRGLGRG'));
console.log(solution('GRGRGRB'));
