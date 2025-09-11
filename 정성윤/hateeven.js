//9/10

function solution(numbers) {
    const arr = [];
    for(let i = 1; i < numbers+1; i++) {
        if(i%2 !== 0)
            arr.push(i);//numbers[i]);로 입력,,
            
        }
    //arr.sort((a, b) => a - b);
        arr.sort((a, b) => a - b);
        return arr;
    };
//    arr.forEach(function(number) {
//    console.log(number);
 // 출력: 1 2 3 4 5

console.log(solution(10));