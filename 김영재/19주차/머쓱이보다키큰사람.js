function solution(array, height) {
    return array.filter(el=>{
     if(el>height)
         return true;
 }).length;
}