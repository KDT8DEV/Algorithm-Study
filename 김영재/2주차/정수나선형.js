//양의 정수 n이 매개변수로 주어집니다. n × n 배열에
//  1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 
// 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
//예시
// 행 \ 열	0	1	2	3	4
//     0	1	2	3	4	5
//     1	16	17	18	19	6
//     2	15	24	25	20	7
//     3	14	23	22	21	8
//     4	13	12	11	10	9

// arra = new Array[n][n];  이건 자바문법임 못씀

//배열 초기화 함수 Array.from
function solution(n) {
    const arr = Array.from({ length: n }, () => Array(n).fill(0));
    let row = 0, col = 0;
    let flag = "r";

    for (let i = 1; i <= n * n; i++) {
        arr[row][col] = i;

        switch (flag) {
            case "r":
                if (col + 1 >= n || arr[row][col + 1] !== 0) {
                    flag = "d";
                    row++;
                } else {
                    col++;
                }
                break;
            case "d":
                if (row + 1 >= n || arr[row + 1][col] !== 0) {
                    flag = "l";
                    col--;
                } else {
                    row++;
                }
                break;
            case "l":
                if (col - 1 < 0 || arr[row][col - 1] !== 0) {
                    flag = "u";
                    row--;
                } else {
                    col--;
                }
                break;
            case "u":
                if (row - 1 < 0 || arr[row - 1][col] !== 0) {
                    flag = "r";
                    col++;
                } else {
                    row--;
                }
                break;
        }
    }

    return arr;
}
console.log(solution(6
))


// 0(00)   //플래그 오른쪽으로 ++
// 1(01)
// 2 02
// 3 03    //+1이 언디파인드면 플래그 바꾸기 내려가기
// 4 13
// 5 23
// 6 33 //+1이 언디파인드면 플래그 바꾸기 -하기
// 7 32
// 8 31
// 9 30

