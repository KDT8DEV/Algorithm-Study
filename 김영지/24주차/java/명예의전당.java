import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {
    public int[] solution(int k, int[] score) {
        int[] answer = new int[score.length];
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for (int i = 0; i < score.length; i++) {
            pq.offer(score[i]);

            if (pq.size() > k) {
                pq.poll();
            }

            answer[i] = pq.peek();
        }

        return answer;
    }
}

public class 명예의전당 {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] result = solution.solution(3, new int[] {10, 100, 20, 150, 1, 100, 200});

        System.out.println(Arrays.toString(result));
    }
}
