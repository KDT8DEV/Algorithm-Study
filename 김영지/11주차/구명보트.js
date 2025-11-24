/**문제 설명
 * 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 
 * 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
 * 예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 
 * 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.
 * 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
 * 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 
 * 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.
*/

/**제한사항
 * 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
 * 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
 * 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
 * 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다. */

/**나의 풀이 */
// 가장 무거운 사람부터 처리
// 투포인터로 배열 양끝을 좁혀가며 값을 비교
function solution(people, limit) {
    let cnt = 0;
    people.sort((a,b)=> a-b);   // 정렬

    // 양끝 인덱스
    let left = 0;
    let right = people.length -1;

    while(left<=right){
        // 가벼운사람 + 무거운사람 조합
        if(people[left]+people[right]<=limit){
            left++; // limit 안넘으면 무거운사람과 가벼운사람 함께 태움
        }
        right--;    // 무거운사람 태움
        cnt++;  // 보트 수 증가
    }

    return cnt;
}

//===============연습장=================//
// let people = [70, 50, 80, 50];
// let limit =	100; //	3
let people = [70, 80, 50];
let limit =	100; // 3
let cnt = 0;


people.sort((a,b)=> a-b);
console.log(people);

let left = 0;
let right = people.length -1;

while(left<=right){
    if(people[left]+people[right]<=limit){
        left++;
    }
    right--;
    cnt++;
}

console.log(cnt);

//==============1차시도====================//
// reduce는 반드시 다음 반복에 넘길 누적값(acc)을 return 해야 함
// 그런데 현재 cnt++ 또는 null 을 return 하고 있어서 acc가 엉망이 됨 
// 의미 없는 reduce 사용.
// let people = [70, 80, 50]; 
// let limit = 100; // 3 
// let cnt = 0; 
// people.reduce((acc,cur)=>{
//      return acc + cur <= limit ? cnt++ : null; 
// }); 
// console.log(cnt); 

// let oneNum = people.length - cnt; 
// console.log(cnt/2 + oneNum);