function solution(record) {
    let userMap = new Map();
    let answer = [];
    //1차 순회 이름 바꿔주고
    for (let i = 0; i < record.length; i++) {
        let [command, uid, nickname] = record[i].split(' ');
        
        if (command === "Enter" || command === "Change") { //이름 바꿔서 들어올때
            userMap.set(uid, nickname);
        }
    }
    //2차 순회 출력
    for (let i = 0; i < record.length; i++) {
        let [command, uid] = record[i].split(' ');
        
        let nickname = userMap.get(uid); //원본에 최신화된 이름이 없기 때문에

        if (command === "Enter") {
            answer.push(`${nickname}님이 들어왔습니다.`);
        } else if (command === "Leave") {
            answer.push(`${nickname}님이 나갔습니다.`);
        }
    }

    return answer;
}
