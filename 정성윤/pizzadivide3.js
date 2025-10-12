
// function solution(slice,n) {
//     result = 0;
//     while(slice*result < n){
//         result++;
        
//     return result;
//     }
// }


function solution(slice,n) {
    result = 0;
    while(slice*result <= n){
        result++;
        if(slice*result == n){
            return result;
        }
    
    }
    return result;
}

    


console.log(solution(4,12));


// slice	n	result
// 7	    10	2
// 4	    12	3

// slice * result <= n


// 4  0  12
// 4  1  4  12
// 4  2
