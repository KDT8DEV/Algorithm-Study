/**문제 설명
준호는 요즘 디펜스 게임에 푹 빠져 있습니다. 
디펜스 게임은 준호가 보유한 병사 n명으로 연속되는 적의 공격을 순서대로 막는 게임입니다. 
디펜스 게임은 다음과 같은 규칙으로 진행됩니다.

준호는 처음에 병사 n명을 가지고 있습니다.
매 라운드마다 enemy[i]마리의 적이 등장합니다.
남은 병사 중 enemy[i]명 만큼 소모하여 enemy[i]마리의 적을 막을 수 있습니다.
예를 들어 남은 병사가 7명이고, 적의 수가 2마리인 경우, 현재 라운드를 막으면 7 - 2 = 5명의 병사가 남습니다.
남은 병사의 수보다 현재 라운드의 적의 수가 더 많으면 게임이 종료됩니다.
게임에는 무적권이라는 스킬이 있으며, 무적권을 사용하면 병사의 소모없이 한 라운드의 공격을 막을 수 있습니다.
무적권은 최대 k번 사용할 수 있습니다.
준호는 무적권을 적절한 시기에 사용하여 최대한 많은 라운드를 진행하고 싶습니다.

준호가 처음 가지고 있는 병사의 수 n, 사용 가능한 무적권의 횟수 k, 
매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열 enemy가 매개변수로 주어집니다. 
준호가 몇 라운드까지 막을 수 있는지 return 하도록 solution 함수를 완성해주세요.
 */

/**나의 풀이 */
// 그리디
// 우선순위 큐 => js에선 힙을 제공하지 않으므로 자바나 파이썬으로 푸는 것이 효율적
//=================JAVA==========================//
import java.util.PriorityQueue;
import java.util.Collections;

class Solution {
    public int solution(int n, int k, int[] enemy) {
        PriorityQueue<Integer> pq =
            new PriorityQueue<>(Collections.reverseOrder()); // MaxHeap

        for (int i = 0; i < enemy.length; i++) {
            n -= enemy[i];
            pq.offer(enemy[i]); // 큐에 넣기

            if (n < 0) {
                if (k == 0) return i;
                n += pq.poll(); // 가장 큰 적 무적권 큐에서 꺼내기
                k--;
            }
        }
        return enemy.length;
    }
}

//=================JS==============================//
// function solution(n, k, enemy) {
//     const heap = new MaxHeap();

//     for (let i = 0; i < enemy.length; i++) {
//         n -= enemy[i];
//         heap.push(enemy[i]);

//         if (n < 0) {
//             if (k === 0) return i;
//             n += heap.pop(); // 가장 큰 적 무적권
//             k--;
//         }
//     }
//     return enemy.length;
// }

// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     push(value) {
//         this.heap.push(value);
//         let idx = this.heap.length - 1;

//         while (idx > 0) {
//             let parent = Math.floor((idx - 1) / 2);
//             if (this.heap[parent] >= this.heap[idx]) break;
//             [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
//             idx = parent;
//         }
//     }

//     pop() {
//         if (this.heap.length === 1) return this.heap.pop();
//         const max = this.heap[0];
//         this.heap[0] = this.heap.pop();

//         let idx = 0;
//         while (true) {
//             let left = idx * 2 + 1;
//             let right = idx * 2 + 2;
//             let largest = idx;

//             if (left < this.heap.length && this.heap[left] > this.heap[largest])
//                 largest = left;
//             if (right < this.heap.length && this.heap[right] > this.heap[largest])
//                 largest = right;

//             if (largest === idx) break;
//             [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
//             idx = largest;
//         }
//         return max;
//     }
// }
//==================================================//
// 그리디
// 우선순위 큐
// let n = 7;
// let k =	3;
// let enemy =	[4, 2, 4, 5, 3, 3, 1];  //	5

// let maxHeap = [];

// for(let i = 0; i < enemy.length; i++){
//     n -= enemy[i];
//     maxHeap.push(enemy[i]);

//     maxHeap.sort((a,b) => b - a);

//     if(n < 0) {
//         if(k===0) return i;
//         n += maxHeap.shift();
//         k--;
//     }
// }
// return enemy.length;
//==================================================//
// let n = 7;
// let k =	3;
// let enemy =	[4, 2, 4, 5, 3, 3, 1];  //	5

// let cnt = 0;

// 역시 sort가 문제임
// enemy.sort((a,b) => b - a);
// console.log(enemy);
// for(let i = 0; i < enemy.length; i++){
//     if(k !== 0){
//         k--;
//         cnt++;
//         continue;
//     }
//     if(n > 0){
//         n -= enemy[i];
//         if(n < 0) {
//             return console.log(cnt);
//         }
//         cnt++;
//     }
// }
// console.log(cnt);
