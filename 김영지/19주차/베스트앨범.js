/**문제 설명
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 
노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 
노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 
베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
*/

/** 제한사항
genres[i]는 고유번호가 i인 노래의 장르입니다.
plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
장르 종류는 100개 미만입니다.
장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
모든 장르는 재생된 횟수가 다릅니다.
 */

/** 나의 풀이 */
// 해시
function solution(genres, plays) {
    // 장르별로 곡 정보를 묶기 위한 Map
    // key: 장르명, value: [ [곡 인덱스, 재생 수], ... ]
    let album = new Map();

    // 모든 곡을 순회하며 장르별로 분류
    for (let i = 0; i < genres.length; i++) {
        // 이미 해당 장르가 Map에 있으면
        if (album.has(genres[i])) {
            // 해당 장르 배열에 [곡 번호, 재생 수] 추가
            album.get(genres[i]).push([i, plays[i]]);
        } else {
            // 처음 등장한 장르는 새 배열을 만들어 저장
            album.set(genres[i], [[i, plays[i]]]);
        }
    }

    // 장르별 총 재생 수를 저장할 배열
    // [장르명, 총 재생 수] 형태
    let genrePlays = [];

    // album(Map)을 순회하며 장르별 총 재생 수 계산
    for (let [key, value] of album) {
        let sum = 0;

        // 해당 장르에 속한 모든 곡의 재생 수 합산
        for (let i = 0; i < value.length; i++) {
            sum += value[i][1];
        }

        // 장르와 총 재생 수를 배열로 저장
        genrePlays.push([key, sum]);
    }

    // 총 재생 수 기준으로 장르를 내림차순 정렬
    // 베스트앨범은 장르 순서가 중요함
    genrePlays.sort((a, b) => b[1] - a[1]);

    // 최종 결과(곡 인덱스)를 담을 배열
    let answer = [];

    // 총 재생 수가 높은 장르부터 처리
    for (let i = 0; i < genrePlays.length; i++) {
        // 현재 장르에 해당하는 곡 목록 가져오기
        let genre = album.get(genrePlays[i][0]);

        // 장르 내부 곡 정렬
        genre.sort((a, b) => {
            // 1순위: 재생 수 내림차순
            if (b[1] !== a[1]) return b[1] - a[1];
            // 2순위: 재생 수가 같으면 고유 번호 오름차순
            return a[0] - b[0];
        });

        // 장르당 최대 2곡까지만 선택
        let limit = Math.min(2, genre.length);

        // 선택된 곡들의 인덱스를 answer에 추가
        for (let j = 0; j < limit; j++) {
            answer.push(genre[j][0]);
        }
    }

    // 베스트앨범에 수록될 곡 인덱스 반환
    return answer;
}
//===========================================//
// let genres = ["classic", "pop", "classic", "classic", "pop"];
// let plays = [500, 600, 150, 800, 2500];     //	[4, 1, 3, 0]

// let album = new Map();

// for (let i = 0; i < genres.length; i++) {
//     if (album.has(genres[i])) {
//         album.get(genres[i]).push([i, plays[i]]);
//     } else {
//         album.set(genres[i], [[i, plays[i]]]);
//     }
// }

// console.log(album);

// let genrePlays = [];

// for (let [key, value] of album) {
//     console.log(key,value);
//     let sum = 0;
//     for (let i = 0; i < value.length; i++) {
//         sum += value[i][1];
//     }
//     genrePlays.push([key, sum]);
// }

// console.log(genrePlays);

// genrePlays.sort((a, b) => b[1] - a[1]);

// console.log(genrePlays);

// let answer = [];

// for (let i = 0; i < genrePlays.length; i++) {
//     let genre = album.get(genrePlays[i][0]);
//     // genre.sort((a, b) => b[1] - a[1]);
//     // 재생 수가 같으면 고유번호(index) 오름차순 고려
//     genre.sort((a, b) => {
//         if (b[1] !== a[1]) return b[1] - a[1];
//         return a[0] - b[0];
//     });
//     // for (let j = 0; j < 2; j++) {
//     //     answer.push(genre[j][0]);
//     // }
//     // 장르에 곡이 한 개일 경우 고려
//     let limit = Math.min(2, genre.length);
//     for (let j = 0; j < limit; j++) {
//         answer.push(genre[j][0]);
//     }
// }

// console.log(answer);