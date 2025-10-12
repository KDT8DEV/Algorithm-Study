// 문제 설명
// 사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 
// 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다. 
// 예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 
// 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다. 
// 다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고 
// ["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, 
// "tony"는 그리움 점수가 없을 때, 이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.
// 그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 
// 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때, 
// 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.


// 나의 풀이
// map을 만들어서 name[i]를 키값으로, yearning[i]를 value값으로 셋팅한다.
// photo 배열의 반복문을 돌려서 map의 키값으로 value를 검색한다음 score에 더한 값을 scoreArr배열에 넣는다.
// scoreArr을 리턴한다.
function solution(name, yearning, photo) {
    var map = new Map();
    var scoreArr = [];
    let score = 0;

    for(let i=0;i<name.length;i++){
        map.set(name[i], yearning[i])
    }

    for(nameArray of photo){
        for(n of nameArray){
            if(map.has(n)){
                score += map.get(n)
            }
        }
        scoreArr.push(score)
        score = 0
    }
    return scoreArr
}


// 다른 사람 풀이
// photo함수의 value값을 reduce함수로 돌린다. a는 누적계산값, c는 현재 요소값
// 현재요소값의 인덱스를 name.indexOf(c)로 구해 yearning의 인덱스로 값을 찾는다.
// 그 값은 누적계산값에 더한 값을 배열에 넣는다. (초기값은 0)
function solution(name, yearning, photo) {
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}

//====================테스트===================
// var name = ["may", "kein", "kain", "radi"];
// var yearning = [5, 10, 1, 3];
// var photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

// var map = new Map();
// var scoreArr = [];
// let score = 0;

// for(let i=0;i<name.length;i++){
//     map.set(name[i], yearning[i])
// }
// // console.log(map);
// // console.log(map.get("may"));

// for(nameArray of photo){
//     for(n of nameArray){
//         if(map.has(n)){
//             score += map.get(n)
//         }
//     }
//     scoreArr.push(score)
//     score = 0
// }
// console.log(scoreArr)