function solution(quiz) {
    return quiz.map(q => {
        const [X, op, Y, , Z] = q.split(" ");
        const x = Number(X);
        const y = Number(Y);
        const z = Number(Z);

        const result = op === "+"
            ? x + y
            : x - y;

        return result === z ? "O" : "X";
    });
}
