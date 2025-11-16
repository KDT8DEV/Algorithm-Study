/* 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
스크린샷 2022-07-07 오후 3.27.04 복사본.png

x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(dot) {
  switch (true) {
    case dot[0] > 0 && dot[1] > 0:
      return 1;
    case dot[0] < 0 && dot[1] > 0:
      return 2;
    case dot[0] < 0 && dot[1] < 0:
      return 3;
    case dot[0] > 0 && dot[1] < 0:
      return 4;
  }
}
/*switch문은 switch(값)의 값과 각 case의 값이 **정확히 일치(===)**하는지 비교해요.
지금 코드를 보면:

switch(dot) - dot 배열 자체를 비교 대상으로 설정
case dot[0] > 0 && dot[1] > 0: - 이건 true 또는 false가 됨

dot 배열은 절대 true나 false가 될 수 없으니까 어떤 case도 실행되지 않아요.
*/

function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
//이런식으로 분해해서 할 수도 있음.
