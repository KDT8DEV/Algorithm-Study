function solution(todo_list, finished) {
    return todo_list.filter((_, i) => !finished[i]);
}

// 풀이
// finished[i]가 false인 항목만 filter로 걸러 반환
