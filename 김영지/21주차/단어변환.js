/**문제 설명
두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 
아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.

예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 
"hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 
최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.
*/

/** 제한사항
각 단어는 알파벳 소문자로만 이루어져 있습니다.
각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
begin과 target은 같지 않습니다.
변환할 수 없는 경우에는 0를 return 합니다. */

/**나의 풀이 */
function solution(begin, target, words) {
    // target이 words 배열에 없으면 변환할 수 없으므로 0 리턴
    if(!words.includes(target)) return 0;
    
    // 한 글자만 다른지 체크하는 함수
    function wordChk(beg, word){
        let cnt = 0;
        for(let i =0; i < beg.length; i++){
            if(beg[i] !== word[i]){
                cnt++;
            }
        }
        return cnt === 1 ? true : false;
    }

    // visited : 단어 체크 방문 여부
    let visited = Array(words.length).fill(false);

    // 큐 : 아직 방문 안했고, 한글자만 다른 단어만 다음 단계 후보에 넣는다
    // {단어, 단계 수}
    let queue = [];
    queue.push({word: begin, step: 0}); // 첫번째 단계 넣기

    while(queue.length > 0){
        const {word , step} = queue.shift();

        if(target === word){
            return step;
        }

        for(let i = 0; i < words.length; i++){

            if(!visited[i] && wordChk(word, words[i])){
                visited[i] = true;
                queue.push({
                    word: words[i],
                    step: step+1
                });
            }
        }
    }
}

//==================================================//
let begin = "hit";	
let target = "cog";
let words =	["hot", "dot", "dog", "lot", "log", "cog"];

// 한 글자만 다른지 체크하는 함수
function wordChk(beg, word){
    let cnt = 0;
    for(let i =0; i < beg.length; i++){
        if(beg[i] !== word[i]){
            cnt++;
        }
    }
    return cnt === 1 ? true : false;
}

// visited : 단어 체크 방문 여부
let visited = Array(words.length).fill(false);

// 큐 : 아직 방문 안했고, 한글자만 다른 단어만 다음 단계 후보에 넣는다
// {단어, 단계 수}
let queue = [];
queue.push({word: begin, step: 0});

while(queue.length > 0){
    const {word , step} = queue.shift();

    if(target === word){
        console.log(step);
        break;
    }

    for(let i = 0; i < words.length; i++){
    
        if(!visited[i] && wordChk(word, words[i])){
            visited[i] = true;
            queue.push({
                word: words[i],
                step: step+1
            });
        }
    }
}


