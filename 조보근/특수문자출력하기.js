// 다음과 같이 출력하도록 코드를 작성해 주세요. !@#$%^&*(\'"<>?:;
// ?? 이거 뭔데? 그냥 문자열로 하면 되는거야? 아님 특수문자를 저렇게 나오게 하는 뭐가 있는거야? 뭔데 저거
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log(`!@#$%^&*(\\'"<>?:;`);
});

/* 문자열로하면 안되길래 백틱(`)을 사용, 근데 또 
\' escape 문자로 인해 \가 사라지게 됨
escape 문자 앞에 백슬래시(\)를 하나 더 추가하여 해결 */
