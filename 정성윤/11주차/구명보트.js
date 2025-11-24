//항상 두명만
function solution(people, limit) {
    people.sort((a, b) => a - b);

    let left = 0;                     
    let right = people.length - 1;    
    let boats = 0;                    

    while (left <= right) {
        // 가장 가벼운 + 가장 무거운 조합이 limit 이하라면 두 명 태움
        if (people[left] + people[right] <= limit) {
            left++;   // 가벼운 사람도 태움
        }
        // 무거운 사람은 항상 태움
        right--;
        boats++;
    }

    return boats;
}

//투포인터