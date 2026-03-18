function solution(keymap, targets) {
  const map = {};

  for (const key of keymap) {
    [...key].forEach((char, idx) => {
      const press = idx + 1;

      if (!map[char] || map[char] > press) {
        map[char] = press;
      }
    });
  }

  return targets.map((target) => {
    let sum = 0;

    for (const char of target) {
      if (!map[char]) return -1;
      sum += map[char];
    }

    return sum;
  });
}

// 문제풀이
// keymap의 순서대로 꺼내서 첫번쨰 단어부터 꺼냄
// 각 알파벳에 각각 클릭수를 담아둠
// 만약에 지금 나온 숫자보다 절약되는 수(중복값)이 있으면 더 적은 수로(좋은방식)으로 하도록
// 있으면 더하고 없으면 -1 반환
