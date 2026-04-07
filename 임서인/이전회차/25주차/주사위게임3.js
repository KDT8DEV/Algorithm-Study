function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const count = {};

  // 숫자 개수 세기
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  const values = Object.values(count);

  if (values.includes(4)) {
    const p = Number(Object.keys(count)[0]);
    return 1111 * p;
  }

  if (values.includes(3)) {
    let p, q;
    for (let key in count) {
      if (count[key] === 3) p = Number(key);
      else q = Number(key);
    }
    return (10 * p + q) ** 2;
  }

  if (values.length === 2 && values.every((v) => v === 2)) {
    const [p, q] = Object.keys(count).map(Number);
    return (p + q) * Math.abs(p - q);
  }

  if (values.includes(2)) {
    let q = [];
    for (let key in count) {
      if (count[key] === 1) q.push(Number(key));
    }
    return q[0] * q[1];
  }

  return Math.min(a, b, c, d);
}

// 1. 숫자 개수 세기
// 2. 4개 다 같음 → 1111 × p
// 3. 3개 같음 → (10 × p + q)²
// 4. 2개씩 같음 → (p + q) × |p - q|
// 5. 2개 같고 나머지 다름 → q₁ × q₂
// 6. 모두 다름 → min(a, b, c, d)
