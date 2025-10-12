//첫번째 풀이
function solution(n){
    let fac=1;
    while(n>=fac)n/=fac++;
        //n은 갈수록 작아짐 fac가 n보다 커지면 그만
        //큰 숫자에서 1부터 나눔
        //1씩 증가하면서 비교
    return --fac;
    //while문에서 벗어나려면 fac이 n보다 커져야하니까 1뺴줌
    
}

//두번째 풀이
// solution=(n,facList = [1,2,3,4,5,6,7,8,9,10,11])=>{
//     return facList.reduce((acc,cur)=>{
//         if(n>=cur){
//             n/=cur;
//             return cur;
//         }
//         return acc;
//     },1);
// }

//  세번째 풀이
// solution = (n, nfac = 1) => {
//   for (let i = 1; i <= 11; i++) {
//     if (nfac > n) {
//       return i - 1;
//     } else if (nfac == n) {
//       return i;
//     } else (nfac > n){
//       nfac = nfac * (i + 1);
//     }
//   }
// }
