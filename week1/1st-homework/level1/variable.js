/* 재선언 실습*/
var variableVar = "123";
var variableVar = "321";
console.log(`variableVar: ${variableVar}`);

let variableLet = "123";
let variableLet = "321"; //error: 재선언 불가
console.log(`variableLet: ${variableLet}`);

const variableConst = "123";
const variableConst = "321"; //error: 재선언 불가
console.log(`variableConst: ${variableConst}`);


/* 재할당 실습*/
var variablevar = "123";
variableVar="321";
console.log(`variableVar: ${variableVar}`);

let variableLet = "123";
variableLet = "321";
console.log(`variableLet: ${variableLet}`);

const variableConst = "123";
variableConst = "321";
console.log(`varibaleConst: ${variableConst}`); //error: 재할당 불가

console.log(``);


/* 범위 실습 */
if(true){
    var x = 'var'; //function scope
}
console.log(`var: ${x}`);

if(true){
    let y = 'let'; //block scope
}
console.log(`let: ${y}`); //error: let은 block scope

function colorFunction(){
    if(true){
        var color = 'blue';
        console.log(color);
    }
    console.log(color);
}
colorFunction();
console.log(color); //error: var은 function scope

hoistFunction();
function hoistFunction(){
    console.log(x); //undefined -> hoisting 때문, 가급적 let,const를 사용한다.
    var x = 'var';
    console.log(x);
}


