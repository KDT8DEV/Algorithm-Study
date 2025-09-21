function solution(dots) {
    var answer = 0;
    //기울기 다 계산
    if((dots[0][0]-dots[1][0])/(dots[0][1]-dots[1][1]) 
       == (dots[2][0]-dots[3][0])/(dots[2][1]-dots[3][1]))
    {
        answer=1;
    }
    else if((dots[0][0]-dots[2][0])/(dots[0][1]-dots[2][1]) 
            == (dots[1][0]-dots[3][0])/(dots[1][1]-dots[3][1]))         
    {
        answer=1;
    }
    else if((dots[0][0]-dots[3][0])/(dots[0][1]-dots[3][1]) 
            == (dots[1][0]-dots[2][0])/(dots[1][1]-dots[2][1]))         
    {
        answer=1;
    }

    return answer;
}