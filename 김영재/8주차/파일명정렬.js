function solution(files) {
    const n = files.length; // 파일 개수

    // 버블 정렬(Bubble Sort) 방식으로 전체 배열을 정렬
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {

            // 파일명에서 숫자가 처음 등장하기 전까지의 문자열(HEAD)을 추출
            // 정렬 시 대소문자 구분을 없애기 위해 소문자로 변환
            let first = files[j].slice(0, files[j].search(/[0-9]/)).toLowerCase();
            let second = files[j + 1].slice(0, files[j + 1].search(/[0-9]/)).toLowerCase();

            // 1. HEAD 기준으로 사전순 비교
            if (first > second) {
                // HEAD가 사전순으로 뒤에 있으면 두 원소를 교환
                [files[j], files[j + 1]] = [files[j + 1], files[j]];
            }
            // 2. HEAD가 같을 경우 → NUMBER 기준으로 비교
            else if (first == second) {
                // 파일명에서 연속된 숫자 부분(NUMBER)을 추출
                //정규표현식으로 /[0-9]/를 하면 제일 앞에 있는 숫자의 인덱스를 반환하지만 +를 붙여주면 
                //하나 이상의 연속된 숫자를 배열의 요소로 반환해줌!
                let num1 = Number(files[j].match(/[0-9]+/)[0]);
                let num2 = Number(files[j + 1].match(/[0-9]+/)[0]);

                // NUMBER가 더 큰 경우 교환
                if (num1 > num2) {
                    [files[j], files[j + 1]] = [files[j + 1], files[j]];
                }
            }
        }
    }

    // 정렬된 결과 반환
    return files;
}

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));

