function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (let [w, h] of sizes) {
        let longer = Math.max(w, h);
        let shorter = Math.min(w, h);

        maxWidth = Math.max(maxWidth, longer);
        maxHeight = Math.max(maxHeight, shorter);
    }

    return maxWidth * maxHeight;
}