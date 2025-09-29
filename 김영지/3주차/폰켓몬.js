/**
 * 문제 설명
 */
// 당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
// 홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다. 예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

// 첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
// 첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
// 첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
// 두 번째(1번), 세 번째(2번) 폰켓몬을 선택
// 두 번째(1번), 네 번째(3번) 폰켓몬을 선택
// 세 번째(2번), 네 번째(3번) 폰켓몬을 선택
// 이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만, 다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다. 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.
// 당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

/**
 * 제한사항
 */
// nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.
// nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
// 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.
// 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.

/**
 * 나의 풀이
 */
// 조건 : result가 nums.length/2 값 이하여야 함
// nums 배열을 for문 돌리고 value값을 map 객체의 key값으로 지정한 뒤 등장마다 +1 해준다.
// 동일한 key값을 세어주고 그 값을 value로 할당한다.
// Object.keys()를 통해 map 객체의 키 갯수를 세어주면 그게 종류값 result이다.
// 여기서 result가 nums.length/2 를 넘을 수 없으므로 삼항연산자로 조건문 처리해준다.
function solution(nums) {
    let map = {}

    for (n of nums){
        map[n] = (map[n] || 0) + 1;
    }

    let result = Object.keys(map).length

    // result가 nums.length/2 값 이하여야 함
    result = result > nums.length/2 ? nums.length/2 : result
    return result
}


// let nums = [3,1,2,3]
// let map = {}

// for (n of nums){
//     map[n] = (map[n] || 0) + 1;
// }
// console.log(map);
// console.log(Object.keys(map).length);
// let result = Object.keys(map).length
// console.log(nums.length/2)
// result = result > nums.length/2 ? nums.length/2 : result

// console.log(result);


/**
 * 더 효율적인 풀이
 */
// Set은 프로그래밍에서 "집합" 개념을 구현한 자료구조
// 중복을 제거해주고 순서가 중요하지 않다.
// new Set(nums)으로 중복제거 후 .size 확인
// Math.min으로 선택할 수 있는 최대 개수와 비교해 최소값 구하기
function solution(nums) {
  const kinds = new Set(nums).size;   // 중복 제거 후 종류 개수
  const maxPick = nums.length / 2;    // 선택할 수 있는 최대 개수
  return Math.min(kinds, maxPick);
}