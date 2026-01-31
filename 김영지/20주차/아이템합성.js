/**문제 설명

아이템 합성기는 합성 가능한 두 가지 아이템을 보유하고 있으면 둘을 합쳐 새로운 아이템으로 만들어 줍니다.
아이템을 합성하는 방법이
[["재료1-1", "재료1-2", "결과1"], ["재료2-1", "재료2-2", "결과2"], ...]
의 형태로 주어질 때, 현재 인벤토리에 가지고 있는 아이템을 이용해 가능한 모든 아이템을 합성한 후 오름차순으로 정리된 인벤토리 상태를 알아보려고 합니다.

예를 들어 합성 방법이
[["bread", "egg", "sandwich"]]
이고, 현재 인벤토리에 있는 아이템 목록이
["water", "egg", "bread"]
라면 합성 후 인벤토리는
["water", "sandwich"]
가 되고, 오름차순으로 정리하면
["sandwich", "water"]
가 됩니다.

아이템들의 합성 방법이 담긴 이차원 문자열 배열 receipt 와
현재 가지고 있는 아이템들이 담긴 일차원 문자열 배열 inventory 가 주어질 때,
가능한 모든 아이템을 합성하고 난 뒤의 아이템 목록을 오름차순으로 정렬한 리스트를
return 하는 solution 함수를 완성해 주세요.
 */

/**나의 풀이 */
function solution(receipt, inventory) {
    let newInven = [...inventory];
    let merged = true;

    while (merged) {
        merged = false;

        for (let [a, b, c] of receipt) {
            if (newInven.includes(a) && newInven.includes(b)) {
                // 하나씩 제거
                newInven.splice(newInven.indexOf(a), 1);
                newInven.splice(newInven.indexOf(b), 1);

                // 결과 추가
                newInven.push(c);

                merged = true;
            }
        }
    }

    return newInven.sort();
}