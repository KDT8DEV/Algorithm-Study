// // 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다.
// //  노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

// // 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// // 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// // 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
// // 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,
// //  베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

// // 제한사항
// // genres[i]는 고유번호가 i인 노래의 장르입니다.
// // plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
// // genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
// // 장르 종류는 100개 미만입니다.
// // 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
// // 모든 장르는 재생된 횟수가 다릅니다.
// function solution(genres, plays) {
//     const genre = {};
//     const genreSongs = {};
//     genres.forEach((element, i) => {
//         genre[element] = (genre[element] || 0) + plays[i];

//         if (!genreSongs[element]) 
//             genreSongs[element] = [];
//         genreSongs[element].push({ id: i, play: plays[i] });

//     });

//     const sortedGenres = Object.keys(genre)
//         .sort((a, b) => genre[b] - genre[a]);
//     console.log(sortedGenres, genreSongs);
    
//     const result = [];

//     sortedGenres.forEach(el => {
//         genreSongs[el].sort((a, b) => {
//             if (b.play === a.play) return a.id - b.id; // 재생횟수 같으면 id 오름차순
//             return b.play - a.play; // 재생횟수 내림차순
//         });
//         console.log(genreSongs[el]);
//         //2개만 
//         result.push(genreSongs[el][0].id);
//         if (genreSongs[el].length > 1) {
//             result.push(genreSongs[el][1].id);
//         }
//     });

//     return result
// }

// // ["classic", "pop", "classic", "classic", "pop"][500, 600, 150, 800, 2500]
// console.log(solution(
//     ["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));
// //[4, 1, 3, 0]

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

