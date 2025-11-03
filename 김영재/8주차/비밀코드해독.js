function solution(n, q, ans) {
    const nums = Array.from({ length: n }, (_, i) => i + 1);
    let count = 0;

    // 5개 조합 생성
    const combinations = getCombinations(nums, 5);

    for (const comb of combinations) {
        let valid = true;

        for (let i = 0; i < q.length; i++) {
            const trial = q[i]; //12345
            const expected = ans[i]; //2 맞은 숫자 수 

            // 교집합 크기 계산
            const match = trial.filter(num => comb.includes(num)).length;

            if (match !== expected) {
                valid = false;
                break;
            }
        }

        if (valid) count++;
    }

    return combinations;
}

// 조합 생성 함수
function getCombinations(arr, selectNum) {
    const results = [];
    const dfs = (start, path) => {
        if (path.length === selectNum) {
            results.push([...path]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            path.push(arr[i]);
            dfs(i + 1, path);
            path.pop();
        }
    };
    dfs(0, []);
    return results;
}
console.log(solution(10,
    [[1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [3, 7, 8, 9, 10],
    [2, 5, 7, 9, 10],
    [3, 4, 5, 6, 7]],
    [2, 3, 4, 3, 3]));
