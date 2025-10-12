function solution(players, callings) {
    nameToIndex = new Map;
    players.forEach((name, index) => {
        nameToIndex.set(name, index)
    })

    for (name of callings) {
        idx = nameToIndex.get(name)

        if (idx > 0) {
            const frontName = players[idx - 1];

            [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];

            nameToIndex.set(name, idx - 1);
            nameToIndex.set(frontName, idx);

        }
    }
    return players;
}