/**문제 설명
전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

구조대 : 119
박준영 : 97 674 223
지영석 : 11 9552 4421
전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

제한 사항
phone_book의 길이는 1 이상 1,000,000 이하입니다.
각 전화번호의 길이는 1 이상 20 이하입니다.
같은 전화번호가 중복해서 들어있지 않습니다. */

/**나의 풀이 */
// 정렬 후 인접 노드만 비교
function solution(phone_book) {
    phone_book.sort();

    for(let i = 0;i<phone_book.length - 1; i++){
        if(phone_book[i+1].startsWith(phone_book[i])){
            return false;
        }
    }
    return true;
}

/**효율적인 풀이 */
// 해시맵 사용
function solution(phone_book) {
    const map = new Map();

    // 모든 전화번호를 Map에 넣기
    for (let phone of phone_book) {
        map.set(phone, true);
    }

    // 각 번호가 접두어를 갖는지 검사
    for (let phone of phone_book) {
        let prefix = "";

        for (let char of phone) {
            prefix += char;         // 앞에서부터 한 글자씩 더해감

            // 자기 자신은 제외하고 prefix가 번호로 존재하면 접두어
            if (prefix !== phone && map.has(prefix)) {
                return false;
            }
        }
    }

    return true;
}


//==================연습장============================//
// let phone_book = ["119", "97674223", "1195524421"]	// false
// phone_book.sort();

// for(let i = 0;i<phone_book.length - 1; i++){
//     if(phone_book[i+1].startsWith(phone_book[i])){
//         return false;
//     }
// }

// return true;

// let search = {};

// for(let phone of phone_book){
//     search[phone] = phone;
// }

// console.log(search);

// for(let s of search){
//     const books = phone_book.map(p => p.startsWith(s.value));
// }
// console.log(books);