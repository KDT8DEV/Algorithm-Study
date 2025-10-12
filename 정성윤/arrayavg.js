function solution(numbers) {
    avg = 0
    for(let i = 0; i<numbers.length; i++){
        avg += numbers[i]
    }
    return avg / numbers.length
}