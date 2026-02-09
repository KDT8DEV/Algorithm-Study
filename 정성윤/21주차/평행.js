// 기울기로 해야됨
function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

  const isParallel = (a, b, c, d) => {
    const dx1 = b[0] - a[0];
    const dy1 = b[1] - a[1];
    const dx2 = d[0] - c[0];
    const dy2 = d[1] - c[1];
    return dy1 * dx2 === dy2 * dx1;
  };

  const p1 = [x1, y1], p2 = [x2, y2], p3 = [x3, y3], p4 = [x4, y4];

  if (isParallel(p1, p2, p3, p4)) return 1; 
  if (isParallel(p1, p3, p2, p4)) return 1; 
  if (isParallel(p1, p4, p2, p3)) return 1; 

  return 0;
}


// function solution(dots) {
//     if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
//         return 1;
//     if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
//         return 1;
//     if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
//         return 1;
//     return 0;
// }

// function calculateSlope(arr1, arr2) {
//     return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
// }