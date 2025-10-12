function solution(numer1, denom1, numer2, denom2) {
    let min = 0, lcd = 1;
    //최소공배수
    for (let i = 1; i <= denom1 * denom2; i++) {
        if (i % denom1 === 0 && i % denom2 === 0) {
            min = i;
            break;
        }
    }

    let numer =  (numer1 * min / denom1 + numer2 * min / denom2);

    //최대공약수
    for (let i = numer; i >= 1; i--) {
        if (numer % i === 0 && min % i === 0) {
            lcd = i;
            break;
        }
    }

    return [numer / lcd, min / lcd];
}