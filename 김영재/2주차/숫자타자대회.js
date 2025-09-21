function solution(numbers) {
    //"1756"
    //못풀었음
    let answer=0;
    let l_hand = 4; 
    let r_hand = 6;
    numbers.forEach(element => {
        ele = parseInt(element)
        
        if(ele==l_hand||ele==r_hand){
            console.log("여기들어옴?")
            
        }
        else if(ele%3==l_hand%3||ele%3==r_hand%3){
            let l_hand_a = parseInt(l_hand); 
            let r_hand_a =  parseInt(r_hand);
            let l_hand_add=0;
            let r_hand_add=0;
            while(l_hand_a!=ele){
                ele_int=Math.floor(ele/3)
                l_hand_int=Math.floor(ele/3)
                if(ele%3==l_hand%3&&l_hand_a>ele){
                    l_hand_a-=3;
                   l_hand_add+=2;
                }
                else if(ele%3==l_hand%3&&l_hand_a<ele){
                    l_hand_a+=3;
                    l_hand_add+=2;
                }
                else if(ele_int/3==l_hand_int/3&&l_hand_a>ele){
                    l_hand_a--;
                    l_hand_add+=2;
                }
                else if(ele_int/3==l_hand_int/3&&l_hand_a<ele){
                    l_hand_a++;
                    l_hand_add+=2;
                }
                else if (l_hand_a==ele){
                    console.log("같음")
                    break;
                } 
            }
            answer = l_hand_add;
        }
    });
    
    return answer;
}
console.log(solution(["1"]));
//왼 4 오 6 
// 왼 11 오 13 제자리아님, 
// 왼 1의 자리수가 같은지 확인,//중요
//     같음, 작으니까 -10 해서확인. 가중치2

// 오 1의 자리수가다름.10의 자리수도 다름.
// 같은 층으로 이동 13 - 10 가중치2
// 3은1과 같은 층임 그러면 계산은 3-1 함. 2번 이동해야한다는 뜻. 가중치곱하기2임 가중치 6임
// -10에서 -1로바뀌어서 가중치는 5 왼손이 1 총 가중치에 2 추가



// 01 02 03   1/  2  3
// 11 12 13   4  5  6/
// 21 22 23   7  8  9
// 31 32 33   ,  0  , 

// 제자리 비교
// 상하좌우 //같은 행이거나 같은 열일때면 바로 계산
// 대각선 일때..가 플래그가 바뀌면-1 하면 됨
// 01 02 03   1  2  3
// 11 12 13   4  5  6
// 21 22 23   7  8  9
// 31 32 33   ,  0  , 
