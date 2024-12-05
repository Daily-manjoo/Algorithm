// 백준 1316
// 그룹 단어란 단어에 존재하는 모든 문자에 대해서 각 문자가 연속해서 나타나는 경우만을 말한다.
// 예를 들어 ccazzzzbb는 c,a,z,b 모두 연속해서 나타나서 그룹 단어이지만
// aabbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다. 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


function check(data){
    let setData = new Set(data[0]); //집합자료형
    for(let i=0; i < data.length - 1; i++){
        //오른쪽 단어와 다르다면
        if(data[i] != data[i+1]){
            //이미 등장한 적 있는 알파벳이면
            if(setData.has(data[i+1])){
                return false;
            }
            else{
                setData.add(data[i+1]);
            }
        }
    }
    return true;
}

let n = Number(input[0]);
let summary = 0;

for(let i = 1; i <= n; i++){
    let data = input[i];
    if(check(data)) summary = summary+1
}
console.log(summary)

