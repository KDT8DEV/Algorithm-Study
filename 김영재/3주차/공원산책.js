const solution = (park, routes) => {
    let H=park.length
    let W=park[0].length

    var answerX=0,answerY=0

    for (pos in park) {
        row = park[pos].indexOf("S")
        if (row!=-1) {
            answerX=(+pos)
            answerY=(+row)
            break;
        }
    }
    const dir = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1]
    }

    for (direction of routes) {
        let [d,n] = direction.split(" ")
        let nX=dir[d][0]
        let nY=dir[d][1]
        let x=answerX
        let y= answerY
        let valid = true

        for(i=1; i<=parseInt(n);i++){
            let tx = x +nX*i
            let ty =y +nY*i

            if(tx<0||tx>=H||ty<0||ty>=W||park[tx][ty]=="X"){
                valid=false
                break;
            }
        }
            if(valid){
                answerX+=nX*parseInt(n)
                answerY+=nY*parseInt(n)
            }
        
    }
    return [answerX,answerY];
}

//

console.log(solution(["SOO","OXX","OOO"],["E 2","S 2","W 1"]))

console.log(solution(["OSO","OOO","OXO","OOO"],["E 2","S 3","W 1"]))

