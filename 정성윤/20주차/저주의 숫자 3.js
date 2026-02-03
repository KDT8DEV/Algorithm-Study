function solution(n) {
  // # 1부터 차례대로 증가시키면서 '3' 포함/3의 배수는 건너뛰고 n번째 값을 찾는다
  let count = 0;
  let x = 0;

  while (count < n) {
    x += 1;
    if (x % 3 === 0) continue;          // # 3의 배수 제외
    if (String(x).includes('3')) continue; // # 숫자 3 포함 제외
    count += 1;
  }

  return x;
}
