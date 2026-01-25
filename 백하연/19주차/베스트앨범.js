/** 문제 설명
 * 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
 * 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 * 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 * 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 *
 * @param {*} genres 노래의 장르를 나타내는 문자열 배열
 * @param {*} plays 노래별 재생 횟수를 나타내는 정수 배열
 * @returns {number[]} 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return
 */
function solution(genres, plays) {
  const best = [];

  // 장르별 총 재생 횟수
  const albums = new Map();
  genres.forEach((genre, index) => {
    albums.set(genre, (albums.get(genre) || 0) + plays[index]);
  });

  // 어느 장르에 어떤 노래(고유 번호와 개별 재생 횟수)가 속해있는지 기록
  const songs = {};
  genres.forEach((genre, index) => {
    if (!songs[genre]) songs[genre] = [];
    songs[genre].push({ id: index, play: plays[index] });
  });

  // 1. 속한 노래가 많이 재생된 장르 먼저 수록
  const sorted = [...albums].sort((a, b) => b[1] - a[1]);
  sorted.forEach(([genre]) =>
    songs[genre]
      .sort((a, b) => {
        if (a.play === b.play) return a.id - b.id; // 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록
        // 2. 장르 내에서 많이 재생된 노래를 먼저 수록
        return b.play - a.play;
      })
      .slice(0, 2) // 장르 별로 가장 많이 재생된 노래를 최대 두 개까지 모아 베스트 앨범을 출시
      .forEach((song) => best.push(song.id)),
  );

  return best;
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500])); // [4, 1, 3, 0]

// 다른 사람의 풀이
function other(genres, plays) {
  const dict = {};
  genres.forEach((genre, i) => {
    dict[genre] = dict[genre] ? dict[genre] + plays[i] : plays[i];
  });

  const dupDict = {};
  return genres
    .map((genre, i) => ({ genre, play: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return dict[b.genre] - dict[a.genre];
      if (a.play !== b.play) return b.play - a.play;
      return a.index - b.index;
    })
    .filter((song) => {
      if (dupDict[song.genre] >= 2) return false;
      dupDict[song.genre] = dupDict[song.genre] ? dupDict[song.genre] + 1 : 1;
      return true;
    })
    .map((song) => song.index);
}
console.log(other(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500])); // [4, 1, 3, 0]
