// const solution = (arr)=>
// {   for(let i=0;i<arr.length;i++){
//         if(arr[i]==arr[i+1]){
//             arr.splice(i+1,1)
//         }console.log(arr)
//     }
//  return arr
// }
// 첫번째 요소 담고 쭉 비교해서 다를 때 담기
// 담아진 요소랑 다를 때 담기
// !== 담는 함수 splice 삽입

// if 같으면 splice

//
// const solution=(arr,ans="")=>{
//     ans =arr.reduce((acc,cur,idx)=>{
//         console.log("acc: "+acc+" cur: "+cur)
//         if(acc.substr(acc.length-1,1)!==cur){
//             return acc+=cur
//             console.log("다름")
//         }else{
//           return acc+=",";
//             console.log("같음")
//         }
//     },"")

//     console.log(ans)
//     return ans;
// }

// https://velog.io/@sunn3842/JS-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%97%90%EC%84%9C-%EC%B2%AB%EB%B2%88%EC%A7%B8-%EB%A7%88%EC%A7%80%EB%A7%89-%EB%AC%B8%EC%9E%90-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0
// const solution=(arr,ans=)=>{
//     ans = arr.reduce((acc,cur)=>{
//         if(acc[acc.length-1]!=cur){
//             return acc=acc.push(cur)
//         }else{
//             return acc;
//         }
//     },[]))
//     return ans;
// }

// 성공한 코드
const solution = (arr, ans = []) => {
  ans = arr.reduce((acc, cur) => {
    if (acc[acc.length - 1] != cur) {
      acc.push(cur);
      return acc;
    } else {
      return acc;
    }
  }, []);
  return ans;
};
