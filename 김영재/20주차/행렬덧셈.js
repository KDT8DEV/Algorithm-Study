// 첫째 줄에 행렬의 크기 N 과 M이 주어진다. 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 
// 이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. N과 M은 100보다 작거나 같고, 
// 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.

// 출력
// 첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력한다. 행렬의 각 원소는 공백으로 구분한다.


function solution(str) {
    const keyMap = {}
    let row, col;
    str.trim().split("\n").map((item, index) => {
        if (index == 0) {
            [row, col] = item.split(" ");
        }
        else {
            const numArr = item.split(" ");
            const mapRow = (index - 1) % row
            if (keyMap[mapRow]) {
                keyMap[mapRow] = keyMap[mapRow].map((el, col) => {
                    return el + Number(numArr[col])
                });
            }
            else {
                keyMap[mapRow] = numArr.map(el => {
                    return Number(el)
                })
            }
        }
    })

 
}

console.log(solution(`3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`
));


