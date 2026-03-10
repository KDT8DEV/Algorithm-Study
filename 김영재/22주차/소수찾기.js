// function solution(n) {
//     let count = 0;

//     function isPrime(num) {
//         if (num < 2) return false;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     }

//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             count++;
//         }
//     }

//     return count;
// }
function solution(n) {
 
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // 소수 개수 반환
    return isPrime.reduce((acc, v) => acc + (v ? 1 : 0), 0);
}
