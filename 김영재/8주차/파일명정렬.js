function solution(files) {
    const n = files.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {

            let first = files[j].slice(0, files[j].search(/[0-9]/)).toLowerCase()
            let second = files[j + 1].slice(0, files[j + 1].search(/[0-9]/)).toLowerCase()

            if (first > second) {

                [files[j], files[j + 1]] = [files[j + 1], files[j]];
            }
            else if (first == second) {
                let num1 = Number(files[j].match(/[0-9]+/)[0])
                let num2 = Number(files[j + 1].match(/[0-9]+/)[0])
                if (num1 > num2) {

                    [files[j], files[j + 1]] = [files[j + 1], files[j]];
                }
            }

        }
    }
    return files;
}


// 4세대 26이면 /4 = 6반인덱스의 의 26%4= 2번째 자식 "Rr"
// 3세대 6이면 /4 = 1번 인덱스의 2번째 자식 "Rr"
// 2세대 1이면 /4 0번인덱스의 1번째 자식 "Rr"
// 1세대 0이면 계산 "Rr"
console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));

