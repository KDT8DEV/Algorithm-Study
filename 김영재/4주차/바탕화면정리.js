solution = (wallpaper) => {
    let answer = [50, 50, -1, -1];

    for (x in wallpaper) {
        y = wallpaper[x].indexOf("#")
        if (y !== -1) {
            if (answer[0] > +x) answer[0] = +x
            if (answer[1] > +y) answer[1] = +y
        }
    }
    for (x in wallpaper) {
        for (y in wallpaper[x]) {
            if (wallpaper[x][y] == "#") {

                if (answer[2] < x) answer[2] = (+x)
                if (answer[3] < y) answer[3] = (+y)
            }
        }
    }
    answer[2]++;
    answer[3]++;
    return answer
}

 
console.log(solution([".#...", "..#..", "...#."]))

console.log
    (solution([
        ".##......",
        "#..#.....",
        "#........",
        ".#.......",
        "..#......",
        "...#.....",
        "....#...."]))

console.log(solution(["..", "#."]))

