function solution(people, limit) {
    // 몸무게 정렬
    people.sort((a, b) => a - b);
    let light = 0;                   
    let heavy = people.length - 1; 
    let boats = 0;

    //가장 무거운 사람 태우고 가벼운 사람을 넣어보면서 탈 수 있는지 확인
    //=> 그리디 알고리즘
    while (heavy >= light) {
        if (people[light] + people[heavy] <= limit) {
            light++; // 가벼운 사람도 태움
        }
        heavy--;
        boats++;
    }

    return boats;
}