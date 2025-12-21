/** 문제 설명
 * 위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 
 * 거쳐간 숫자의 합이 가장 큰 경우를 찾아보려고 합니다. 
 * 아래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능합니다. 
 * 예를 들어 3에서는 그 아래칸의 8 또는 1로만 이동이 가능합니다.
 * 삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 
 * 거쳐간 숫자의 최댓값을 return 하도록 solution 함수를 완성하세요.
*/

/** 제한사항
 * 삼각형의 높이는 1 이상 500 이하입니다.
 * 삼각형을 이루고 있는 숫자는 0 이상 9,999 이하의 정수입니다. 
 */

/**나의 풀이*/
// 동적계획법
function solution(triangle) {
    let dp = new Array(triangle.length);

    for (let i = 0; i < triangle.length; i++) {
        dp[i] = new Array(triangle[i].length);
    }

    dp[0][0] = triangle[0][0];

    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j == 0) {
                dp[i][j] = dp[i - 1][j] + triangle[i][j];
            } else if (j == triangle[i].length - 1) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
            }
        }
    }

    let maxArr = dp[triangle.length-1];

    const answer = maxArr.reduce((acc,curr)=> {
        return acc > curr ? acc : curr;
    })
    return answer;
}

//======================연습장============================//
// let triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];	// 30
// let sum = 0;
// let dp = new Array(triangle.length);

// for (let i = 0; i < triangle.length; i++) {
// 	dp[i] = new Array(triangle[i].length);
// }

// dp[0][0] = triangle[0][0];

// for (let i = 1; i < triangle.length; i++) {
// 	for (let j = 0; j < triangle[i].length; j++) {
//         if (j == 0) {
//             dp[i][j] = dp[i - 1][j] + triangle[i][j];
//         } else if (j == triangle[i].length - 1) {
//             dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
//         } else {
//             dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
//         }
// 	}
// }

// let maxArr = dp[triangle.length-1];

// const answer = maxArr.reduce((acc,curr,idx)=> {
//     return acc > curr ? acc : curr;
// })
// console.log(answer);

// console.log(triangle[0][0]);
// console.log(triangle[1][0]);
// console.log(triangle[2][0]);
// console.log(triangle[3][0]);
// console.log(triangle[4][0]);

// console.log(triangle[0][0]);
// console.log(triangle[1][0]);
// console.log(triangle[2][0]);
// console.log(triangle[3][0]);
// console.log(triangle[4][1]);

// console.log(triangle[0][0]);
// console.log(triangle[1][0]);
// console.log(triangle[2][0]);
// console.log(triangle[3][1]);
// console.log(triangle[4][1]);