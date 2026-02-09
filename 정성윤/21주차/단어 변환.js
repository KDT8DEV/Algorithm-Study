function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }
  const visited = Array(words.length).fill(false);

  const oneDifferent = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        diff++;
      }
      if (diff > 1) {
        return false;
      }
    }
    return diff === 1;
  };

  const queue = [[begin, 0]];

  for (let q = 0; q < queue.length; q++) {
    const [curWord, steps] = queue[q];

    if (curWord === target) {
        return steps;
    }
    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && oneDifferent(curWord, words[i])) {
        visited[i] = true;
        queue.push([words[i], steps + 1]);
      }
    }
  }

  return 0;
}
