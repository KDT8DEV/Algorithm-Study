// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

// [ptc]-[cpl] 하자는 생각으로 함
// 정답은 나오지만 효율성 빵점이라 틀림
solution = (ptc, cpl) => {
  cpl.forEach((e) => {
    let index = ptc.indexOf(ptc.find((el) => el == e)); // ptc.findIndex((el)=>el==e);
    ptc.splice(index, 1);
  });
  return ptc[0];
};

// find를 써야하는 건 맞는 것 같음
// 코딩테스트 > 해시 > 이름
// 우윤님은 아주 똑똑하군

//  Map 객체를 써볼게요

// solution=(ptc,cpl,idx='')=>{
//     cpl.forEach((e,i)=>{
//         idx = ptc.findIndex((el)=>el==e);
//         ptc.splice(idx,1)
//     })
//     return String(ptc);
// }

// 인덱스의 비교
solution = (ptc, cpl) => {
  let ptc1 = new Map(),
    cpl1 = new Map();
  // for(let i=0;i<ptc.length;i++){
  ptc.forEach((e, i) => {
    ptc1.set(i, e);
  });
  cpl.forEach((e, i) => {
    // cpl1.set(i,e);
    if (ptc1.has(e)) ptc1.delete(String(e));
    console.log(ptc1);

    for (const [key, value] of map.entries()) {
      if (value === searchValue) {
        return key;
      }
    }
  });
  return String([...ptc1.keys()]);
};

// 열공햇서요 모르갯서요

// sort를 해서
// key값을 부여하고
// 아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
