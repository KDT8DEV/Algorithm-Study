//https://school.programmers.co.kr/learn/courses/30/lessons/389478
/*문제 설명
1 ~ n의 번호가 있는 택배 상자가 창고에 있습니다. 당신은 택배 상자들을 다음과 같이 정리했습니다.

 왼쪽에서 오른쪽으로 가면서 1번 상자부터 번호 순서대로 택배 상자를 한 개씩 놓습니다. 가로로 택배 상자를
w개 놓았다면 이번에는 오른쪽에서 왼쪽으로 가면서 그 위층에 택배 상자를 한 개씩 놓습니다. 그 층에 상자를
w개 놓아 가장 왼쪽으로 돌아왔다면 또다시 왼쪽에서 오른쪽으로 가면서 그 위층에 상자를 놓습니다. 이러한 방식으로
n개의 택배 상자를 모두 놓을 때까지 한 층에 w개씩 상자를 쌓습니다.

      22 21 20 19
13 14 15 16 17 18
12 11 10 9  8  7
1  2  3  4  5  6

위 그림은 w = 6일 때 택배 상자 22개를 쌓은 예시입니다.
다음 날 손님은 자신의 택배를 찾으러 창고에 왔습니다. 당신은 손님이 자신의 택배 상자 번호를 말하면 해당 택배 상자를 꺼내줍니다.
 택배 상자 A를 꺼내려면 먼저 A 위에 있는 다른 모든 상자를 꺼내야 A를 꺼낼 수 있습니다. 예를 들어, 위 그림에서 8번 상자를 꺼내려면 먼저 20번, 17번 상자를 꺼내야 합니다.

당신은 꺼내려는 상자 번호가 주어졌을 때, 꺼내려는 상자를 포함해 총 몇 개의 택배 상자를 꺼내야 하는지 알고 싶습니다.

창고에 있는 택배 상자의 개수를 나타내는 정수 n, 가로로 놓는 상자의 개수를 나타내는 정수 w와 꺼내려는 택배 상자의 
번호를 나타내는 정수 num이 매개변수로 주어집니다. 이때, 꺼내야 하는 상자의 총개수를 return 하도록 solution 함수를 완성해 주세요.*/
function solution(n, w, num) {
    var answer = 0; 
    
    var total_floor=Math.ceil(n/w);//총 층수
    var num_floor=Math.ceil(num/w);//목표 층수
    
    // return total_floor - num_floor; //오답, 끝 층에서 빈 칸 계산x
    
    var top_floor_idx = n % w;
    var target_floor_idx = num % w;
    //박스의 방향이 같으면 바로 인덱스로 비교하면 됨.
    //박스의 방향은 층이 짝수냐 음수냐로 결정
    
  
    
    if(total_floor % 2 == num_floor %2){//방향이 같으면
        if(top_floor_idx >= target_floor_idx ) answer++; //비교
    }
    else{//방향이 다르면
        //여기서 gpt한테 물어봄 끝 칸일 때 인덱스가 0으로 변하기 때문에 비교에 문제가 생김 w를 더해야함
        if (top_floor_idx==0) top_floor_idx = w; // 보정
        if (target_floor_idx==0) target_floor_idx = w; // 보정
        if(top_floor_idx + target_floor_idx >= w) answer++;
        //방향이 다를 때 둘이 더한 값이 넓이보다 크거나 같으면 위에 박스가 있다는 뜻.
    }
    
    answer+=total_floor - num_floor;
    return answer;
}