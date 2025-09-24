// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 
// 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

/*제한사항
2 < common의 길이 < 1,000
-1,000 < common의 원소 < 2,000
common의 원소는 모두 정수입니다.
등차수열 혹은 등비수열이 아닌 경우는 없습니다.
등비수열인 경우 공비는 0이 아닌 정수입니다.*/

/*나의 풀이*/
// 배열의 마지막 요소를 꺼내는 pop() 함수 사용. 
// pop() 함수 사용 시 해당 요소는 배열에서 제거된다.
function solution(common) {
    // 등차수열
    if((common[1] - common[0]) === (common[2] - common[1])){
        return common.pop() + (common[1] - common[0])
    }
    // 등비수열
    else if(common[1]/common[0] === common[2]/common[1]){
        return common.pop()*(common[1]/common[0])
    }
}


/*나의 틀린 풀이*/
// 등차수열 리턴 시 (common[2] - common[1])를 사용하면 pop()에 의해 인덱스가 조정되기 때문에 에러가 난다.
function solution(common) {
    // 등차수열
    if((common[1] - common[0]) === (common[2] - common[1])){
        return common.pop() + (common[2] - common[1])
    }
    // 등비수열
    else if(common[1]/common[0] === common[2]/common[1]){
        return common.pop()*(common[1]/common[0])
    }
}

