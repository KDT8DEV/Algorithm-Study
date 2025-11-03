/**
 * 문제 설명 
 * 
 * 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
 * [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
 * 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
 */

/**
 * 제한 사항 
 * 
 * dots의 길이 = 4
 * dots의 원소는 [x, y] 형태이며 x, y는 정수입니다.
 * 0 ≤ x, y ≤ 100
 * 서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
 * 두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
 * 임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.
 */

/**
 * 나의 풀이
 * 
 * 풀지 못함
 * 직선의 기울기가 같으면 평행하다는 것을 알고 있어야 한다.
 * 기울기 구하는 법 : y2 - y1 / x2 - x1
 * y2 - y1 / x2 - x1 와 y4 - y3 / x4 - x3 이 같으면 1을 리턴해준다.
 * 이때, 분모가 0이되면 안되므로 각 분모와 분자값을 곱한 값이 같은지 비교해준다.
 * 즉, (y2 - y1) * (x4 - x3) == (x2 - x1) * (y4 - y3) 비교
 * isParallel 함수 만들고 dots의 각기 다른 조합을 넣어 값을 리턴해준다. 
 */
function solution(dots){
    const isParallel = (a,b,c,d) => {
        return (b[1]-a[1])*(d[0]-c[0]) ===(d[1]-c[1])*(b[0]-a[0])
    }

    if(isParallel(dots[0],dots[1],dots[2],dots[3])) return 1
    if(isParallel(dots[0],dots[2],dots[3],dots[1])) return 1
    if(isParallel(dots[0],dots[3],dots[2],dots[1])) return 1

    return 0
}





//===========================실패한 시도==========================
// let xSet = []
// let ySet = []
// function solution(dots){
//     let arr = []
//     var char;
//     dots.forEach((row, idx1) => {
//         row.forEach((el, idx2)=>{
//             char = idx2==0 ? "x" : "y" 
//             arr[char+(idx1+1)] = el
//         })
//     })
//     // console.log(arr[x1])

//     // arr[x1] - arr[x2] / arr[x3] - arr[x4] => arr[y1] - arr[y2] / arr[y3] - arr[y4]
//     // arr[x1] - arr[x3] / arr[x2] - arr[x4] => arr[y1] - arr[y3] / arr[y2] - arr[y4]
//     // arr[x1] - arr[x4] / arr[x2] - arr[x3] => arr[y1] - arr[y4] / arr[y2] - arr[y3]

//     if(Math.abs(arr.x1 - arr.x2) == Math.abs(arr.x3 - arr.x4)){
//         if(Math.abs(arr.y1 - arr.y2) == Math.abs(arr.y3 - arr.y4)){
//             return 1
//         }
//         else{
//             return 0
//         }
//     }else if(Math.abs(arr.x1 - arr.x3) == Math.abs(arr.x2 - arr.x4)){
//         if(Math.abs(arr.y1 - arr.y3) == Math.abs(arr.y2 - arr.y4)){
//             return 1
//         }
//         else{
//             return 0
//         }
//     }else if(Math.abs(arr.x1 - arr.x4) == Math.abs(arr.x2 - arr.x3)){
//         if(Math.abs(arr.y1 - arr.y4) == Math.abs(arr.y2 - arr.y3)){
//             return 1
//         }
//         else{
//             return 0
//         }
//     }
//     else{
//         return 0
//     }
// }

// console.log(solution(dots))



