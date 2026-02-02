function solution(genres, plays) {
  // 1. 장르별 총 재생 횟수 계산
  const genreTotal = {};
  genres.forEach((genre, idx) => {
    genreTotal[genre] = (genreTotal[genre] || 0) + plays[idx];
  });

  // 2. 노래 정보 객체 배열 생성 (장르, 재생횟수, 고유번호)
  const songs = genres.map((genre, idx) => ({
    genre,
    plays: plays[idx],
    id: idx,
  }));

  // 3. 정렬 (장르별 총 재생횟수 내림차순 -> 노래 재생횟수 내림차순 -> 고유번호 오름차순)
  songs.sort((a, b) => {
    if (genreTotal[b.genre] !== genreTotal[a.genre]) {
      return genreTotal[b.genre] - genreTotal[a.genre];
    }
    if (a.plays !== b.plays) {
      return b.plays - a.plays;
    }
    return a.id - b.id;
  });

  // 4. 각 장르에서 최대 2개씩 선택
  const result = [];
  const genreCount = {};

  songs.forEach((song) => {
    if ((genreCount[song.genre] || 0) < 2) {
      result.push(song.id);
      genreCount[song.genre] = (genreCount[song.genre] || 0) + 1;
    }
  });

  return result;
}

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays)); // [4, 1, 3, 0]
