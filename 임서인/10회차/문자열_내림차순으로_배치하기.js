// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s,cnt=[]) {
    cnt  = [...s].map((e)=>{
        return e.charCodeAt(0)
    })
    cnt.sort((a,b)=>b-a)
    let result = cnt.map((e)=>{
        return String.fromCharCode(e)
    })
    return result.join('')
}