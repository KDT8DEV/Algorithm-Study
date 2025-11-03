function slicefile(file) {
    let head = "";
    let numberStr = "";
    let i = 0;

    //문자
    while (i < file.length) {
        let char = file[i];
        if (char >= '0' && char <= '9') {
            break;
        }
        head += char;
        i++;
    }
    //숫자
    while (i < file.length) {
        let char = file[i];
        if (char < '0' || char > '9') {
            break;
        }
        numberStr += char;
        i++;
    }

    return {
        head: head.toLowerCase(),
        number: parseInt(numberStr, 10)
    };
}

function solution(files) {
    let filecollect = files.map(file => {
        const parts = slicefile(file);
        
        return {
            original: file,
            head: parts.head,
            number: parts.number
        };
    });

    filecollect.sort((a, b) => {
        if (a.head < b.head) 
            return -1;
        if (a.head > b.head) 
            return 1;

        if (a.number < b.number) 
            return -1;
        if (a.number > b.number) 
            return 1;
    });

    let answer = filecollect.map(info => info.original);
    
    return answer;
}

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));