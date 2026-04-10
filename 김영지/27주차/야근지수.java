/**문제 설명
회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 
야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. 
Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.
Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 
퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 
야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.
 */

 import java.util.*;

 class 야근지수 {
    public long solution(int n, int[] works) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        // 모든 작업량을 힙에 넣기
        for(int work : works){
            pq.offer(work); // 힙에 넣기
        }

        // n시간동안 가장 큰 작업량을 1 줄이기
        for(int i = 0; i < n; i++){
            int max = pq.poll();    // 가장 큰 작업량 꺼내기

            if(max == 0) return 0;  // 작업량이 0이면 피로도 0

            pq.offer(max-1);
        }

        // 남은 작업량 제곱해서 합산
        long answer = 0;
        while (!pq.isEmpty()) {
            int work = pq.poll();
            answer += (long) work * work;
            
        }
        return answer;
    }

    public static void main(String[] args) {
        야근지수 sol = new 야근지수();
        int[] works = {4, 3, 3};
        int n = 4;
        long result = sol.solution(n, works);
        System.out.println("야근 지수: " + result);
    }
 }