function solution(command) {
    let answer = [0, 0]
    let dir = 0;
    let DIR = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    command.split("").forEach(c => {
        switch (c) {  
            case 'R':
                if (dir == 3) { dir = 0 }
                else {
                    dir += 1;
                }
                break;
            case 'L':
                if (dir == 0) { dir = 3 }
                else {
                    dir -= 1;
                }
                break;
            case 'G':
                switch (dir) {
                    case 0:
                        answer[1] += 1;
                        break;
                    case 1:
                        answer[0] += 1;
                        break;
                    case 2:
                        answer[1] -= 1;
                        break;
                    case 3:
                        answer[0] -= 1;
                        break;
                }
                break;
            case 'B':
                switch (dir) {
                    case 0:
                        answer[1] -= 1;
                        break;
                    case 1:
                        answer[0] -= 1;
                        break;
                    case 2:
                        answer[1] += 1;
                        break;
                    case 3:
                        answer[0] += 1;
                        break;
                }
                break;
        }
    })
    return answer;
}
// GRGLGRG [2,2]