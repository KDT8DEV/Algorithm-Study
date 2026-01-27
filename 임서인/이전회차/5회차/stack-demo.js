// Stack 데모: push, pop, peek, isEmpty, size + 응용(괄호 유효성 검사)

// =========================
// Stack 구현 (push/pop 형식)
// =========================
class Stack {
  constructor() {
    this._arr = [];
  }
  // push(item): item을 스택의 맨 위(top)에 추가
  push(item) {
    this._arr.push(item);
  }
  // pop(): 스택의 맨 위 항목 제거 및 반환 (비면 오류)
  pop() {
    if (this._arr.length === 0) throw new Error('Stack underflow');
    return this._arr.pop();
  }
  // peek(): 스택의 맨 위 항목 반환(제거 X)
  peek() {
    return this._arr.length === 0 ? undefined : this._arr[this._arr.length - 1];
  }
  // isEmpty(): 비어있으면 true
  isEmpty() {
    return this._arr.length === 0;
  }
  // size(): 요소 개수
  size() {
    return this._arr.length;
  }
  // clear(): 비우기
  clear() {
    this._arr.length = 0;
  }
}

// ===============
// Stack 연산 예시
// ===============
console.log('=== Stack Operations Demo ===');
const st = new Stack();

console.log('isEmpty():', st.isEmpty()); // true
st.push('A');
console.log("push('A')");
st.push('B');
console.log("push('B')");
st.push('C');
console.log("push('C')");
console.log('size():', st.size()); // 3

console.log('peek():', st.peek()); // 'C'
console.log('pop():', st.pop()); // 'C'
console.log('peek():', st.peek()); // 'B'
console.log('size():', st.size()); // 2
console.log('isEmpty():', st.isEmpty()); // false

// ==============================
// 응용 예시 1: 괄호 유효성 검사
// ==============================
function isValidParens(str) {
  const s = new Stack();
  const open = new Set(['(', '[', '{']);
  const match = { ')': '(', ']': '[', '}': '{' };

  for (const ch of str) {
    if (open.has(ch)) s.push(ch);
    else if (ch in match) {
      if (s.isEmpty() || s.pop() !== match[ch]) return false;
    }
  }
  return s.isEmpty();
}

console.log('isValidParens("([]){}"):', isValidParens('([]){}')); // true
console.log('isValidParens("([)]")  :', isValidParens('([)]')); // false

/* 실행 예상 출력(환경에 따라 따옴표 등 표현만 차이)
=== Stack Operations Demo ===
isEmpty(): true
push('A')
push('B')
push('C')
size(): 3
peek(): C
pop(): C
peek(): B
size(): 2
isEmpty(): false
isValidParens("([]){}"): true
isValidParens("([)]")  : false
*/
