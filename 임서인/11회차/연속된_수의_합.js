// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total,result=[]) {
    if(total%num){
        let mid = Math.floor(total/num)
        let first = mid - (num/2)+1  
        for(let i=first;i<first+num;i++){
            result.push(i)
        }
    }else{
        let mid = total/num
        let first = mid - Math.floor(num/2)
        for(let i=first;i<first+num;i++){
            result.push(i)
        }
    }
    return result
}
// num이 짝수일 때와 홀수일 때로 나누어
// total을 num으로 나눈 몫을 기준으로
// 첫 번째 수를 구한 후
// 첫 번째 수부터 num개 만큼 result 배열에 담아 리턴한다.