/**문제 설명
 * n개의 음이 아닌 정수들이 있습니다. 
 * 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 
 * 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

* 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 
숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.
*/

/**제한사항
 * 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
 * 각 숫자는 1 이상 50 이하인 자연수입니다.
 * 타겟 넘버는 1 이상 1000 이하인 자연수입니다. */

/**나의 풀이 */
// dfs 함수를 재귀로 호출해 인덱스가 늘어날때마다 sum에 값을 더하거나 빼주는 분기처리 
function solution(numbers, target) {
    let cnt = 0;
    function dfs(idx, sum){

        if(idx === numbers.length){     // 모든 숫자를 다 쓴 경우
            if(sum === target) cnt++;
            return;
        }
        dfs(idx+1, sum+numbers[idx]);   // 현재 숫자를 더함
        dfs(idx+1, sum-numbers[idx]);   // 현재 숫자를 뺌
    }
    dfs(0,0);
    return cnt;
}
//=======================연습장============================//
// let numbers = [1, 1, 1, 1, 1];
// let target = 3; //	5
// let numbers = [4, 1, 2, 1];
// let target = 4; //	2
// let cnt = 0;
// function dfs(idx, sum){
//     if(idx === numbers.length){     // 모든 숫자를 다 쓴 경우
//         if(sum === target) cnt++;
//         return;
//     }
//     dfs(idx+1, sum+numbers[idx]);   // 현재 숫자를 더함
//     dfs(idx+1, sum-numbers[idx]);   // 현재 숫자를 뺌
// }

// dfs(0,0);
// console.log(cnt);

//==================흐름예시===========================
// dfs(0, 0)
//  ├─ dfs(1, 0 + 1)  // 첫 번째 1을 더함 → sum=1
//  │    ├─ dfs(2, 1 + 1) → sum=2
//  │    │    ├─ dfs(3, 2 + 1)
//  │    │    └─ dfs(3, 2 - 1)
//  │    └─ dfs(2, 1 - 1) → sum=0
//  │         ├─ dfs(3, 0 + 1)
//  │         └─ dfs(3, 0 - 1)
//  └─ dfs(1, 0 - 1)  // 첫 번째 1을 뺌 → sum=-1
//       ├─ dfs(2, -1 + 1)
//       └─ dfs(2, -1 - 1)
