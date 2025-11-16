function solution(s) {
    var answer = 0;
    let numArray=['zero'
	,'one'
	,'two'
	,'three'
	,'four'
	,'five'
	,'six'
	,'seven'
	,'eight'
	,'nine'];
    numArray.forEach((el,idx)=>{
       s= s.replaceAll(el,idx)
        console.log(s);
        
    })
    return parseInt(s);
}

console.log(solution("one4seveneight"));
