function solution(record) {
    let name = {};
    record.forEach(element => {
        let log = element.split(" ")
        if (log[0] !== "Leave") {

        name[log[1]] = log[2];
        }
    });

    return record.filter(item => {
        let log = item.split(" ")
        if (log[0] !== "Change") return true;
    }).map(el => {
        let log = el.split(" ")
        if (log[0] == "Enter") {
            return `${name[log[1]]}님이 들어왔습니다.`
        }
        else if (log[0] == "Leave") {
            return `${name[log[1]]}님이 나갔습니다.`
        }
    })
    
}

console.log(solution(["Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"]));
