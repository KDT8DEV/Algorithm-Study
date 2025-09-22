
function solution(n) {
    result = 0;
    while(true){
        result++;
        if((6*result) % n == 0){
            return result;
        }
    }
    
}

console.log(solution(4));
// n 사람수 피자 6조각
// 피자 몇판?
// 같은 수로 먹는다
// 10 20 30

// (i * n = 6의배수)

// n	result
// 6	1
// 10	5
// 4	2

// 1   6    6
// 2   6    12
// 3   6    18
// 4   6    24
// 5   6    30

// 1   10  6
// 2   10  12
// 3   10  18
// 4   10  24
// 5   10  30
// 6   10을 만족할때까지 result++     36
