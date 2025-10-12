// 문제 설명
// 코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 
// 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.
// 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
// 한 번 사용한 카드는 다시 사용할 수 없습니다.
// 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
// 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
// 예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 
// 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 ["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 
// 첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 
// 첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.
// 문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, 
// cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

// 나의 풀이
// goal 문장을 for문 돌려 cards1에 값이 있으면 0번째와 비교 후 같으면 cards1[0]의 값을 arr에 옮겨 담는다.
// shift()를 사용해 첫번째 배열을 없앤다.
// cards2도 마찬가지로 비교한다.
// arr.join('')으로 합친 값과 goal.join('')값을 비교해 값을 리턴한다.
function solution(cards1, cards2, goal) {
    let arr = []
    for(let i=0;i<goal.length;i++){
        if(goal[i] == cards1?.[0]){
            arr.push(cards1.shift())
        }else if(goal[i] == cards2?.[0]){
            arr.push(cards2.shift())
        }else{
            break;
        }
    }

    return arr.join('') == goal.join('') ? "Yes" : "No";
}


// 기존 코드의 문제점
// shift()는 배열의 첫 요소를 제거하면서 모든 요소를 앞으로 당김
// → 즉, O(n) 시간 복잡도.
// → goal 길이가 커질수록 비효율적임.

// 효율적인 풀이 (O(n))
// shift() 대신 인덱스 포인터(idx1, idx2) 사용
function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;

    for (let word of goal) {
        if (idx1 < cards1.length && word === cards1[idx1]) {
            idx1++;
        } else if (idx2 < cards2.length && word === cards2[idx2]) {
            idx2++;
        } else {
            return "No";  // 일치하지 않으면 실패
        }
    }
    return "Yes"; // 모든 단어를 순서대로 만들 수 있음
}









//=============================테스트=============================//
// let cards1 = ["i", "drink", "water"]	
// let cards2 = ["want", "to"]	
// let goal = ["i", "want", "to", "drink", "water"]
let cards1 = ["i", "water", "drink"]	
let cards2 = ["want", "to"]	
let goal = ["i", "want", "to", "drink", "water"]
let arr = []

for(let i=0;i<goal.length;i++){
    if(goal[i] == cards1?.[0]){
        arr.push(cards1.shift())
        console.log(i)
        console.log(arr)
    }else if(goal[i] == cards2?.[0]){
        console.log(cards2[0])
        arr.push(cards2.shift())
        console.log(i)
        console.log(arr)
    }else{
        console.log(i)
        console.log(arr)
        break;
    }
}

console.log(arr.join('') == goal.join(''))
// arr.join('') == goal.join('') ? "Yes" : "No";