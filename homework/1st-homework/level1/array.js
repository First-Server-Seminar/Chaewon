/**
 * 1. 배열 선언
 */
var arr1 = [];
console.log(arr1);
console.log(typeof arr1);

var arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(typeof arr2);

var arr3 = ['김채원', 1, 2, 3, null, {
    name: 'cw',
    age: 26
}];
console.log(arr3);
console.log(typeof arr3);

/**  
 * 2. array prototype 메소드
 */
console.log("**** Array 기본 함수를 알아보자 ****");
var arr = [1, 2, 3, 4];

//1. length
console.log(`arr의 길이: ${arr.length}`);

//2. push, pop
arr.push('new item');
console.log('arr push:', arr);
arr.pop();
console.log("arr pop:", arr);

//3. shift, unshift 
arr.unshift('firstItem'); // 배열 맨 앞에 요소 push
console.log('arr unshift:', arr);
arr.shift(); //배열 맨 앞 요소 pop
console.log('arr shift:', arr);

//4. includes
console.log('arr.includes(4)', arr.includes(4));
console.log('arr.indexOf(100)', arr.indexOf(100)); //false일 때 -1 반환

//5. indexOf
console.log('arr.indexOf(4):', arr.indexOf(4));
console.log('arr.indexOf(100)', arr.indexOf(100));

//6. concat --> 배열 합치기
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var concatArr = arr1.concat(arr2);
console.log('arr1,concat(arr2):', concatArr);

//7.join
var location = ['서울', '대전', '대구', '부산'];
console.log(location.join('->')); //각 요소 사이에 파라미터 값을 넣어서 출력해줌

//8. reverse
console.log(location.reverse().join('->'));

//9. sort
//원 배열이 정렬됨
//sort의 인자로 정렬기준 함수를 전달, 비교 기준을 담은 함수는 음수(-1), 0, 양수(1) 반환
//음수(-1)일 경우 a가 b보다 앞에 있어야 한다.
//0일경우 a와 b의 순서를 바꾸지 않는다.
//양수(1)일 경우 b가 a보다 앞에 있어야 한다.
var countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a > b ? 1 : -1)); //제대로 정렬 x
console.log(countries.sort((a, b) => a.localeCompare(b))); //유니코드 기준으로 문자 정렬
console.log('오름차순 정렬:', concatArr.sort((a, b) => a - b)); //-> ??
console.log('내림차순 정렬:', concatArr.sort(function (a, b) {
    return b - a;
}));

//10. filter : 배열 요소 전체에 대해 조건을 걸어서, 그 조건을 충족하는 요소들을 새로운 배열로 반환해줌.
var number = [100, 234, -125, 1, 23, -637, -123, 99, 2, 3, 4, 5];
var minusNumber = number.filter(item => item < 0);
console.log('minusNumber: ', minusNumber); //minusNumber:  [ -125, -637, -123 ]

//11. map : 배열 요소 전체에 대해서 함수를 호출하고, 각 요소에 대한 함수호출 결과를 새로운 배열로 반환해줌.
var countries = ['Österreich', 'Andorra', 'Vietnam', 'Korea', 'China'];
var countriesLengths = countries.map(item => item.length);
console.log('countriesLengths: ', countriesLengths); //countriesLengths:  [ 10, 7, 7, 5, 5 ]

//12.reduce : 값 하나를 반환할 때 주로 사용. ex) 1~n까지 더하기
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = number.reduce((previousValue, currentValue) => {
    console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`);
    return previousValue + currentValue;
});
console.log('sum = ', sum);

var string = ["안", '녕', '하', '세', '요'];
var concat = string.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log('concat : ', concat);

/** 
 * 3. 배열 순회
 */
var serverPart = ["김현기", "석영현", "강준우", "송정우", "신지혜", "이영은", "이진호"];
let serverIndexStr = '서버파트 여러분 번호 한번 세겠습니다. "'; //let -> 재선언 불가, 재할당가능, hoisting x, block scope
let serverPartMemberNameStr = '서버파트 여러분 이름 한번씩만 불러주세요~ "';

for(let item in serverPart){ //in -> item의 인덱스가 출력됨
    serverIndexStr += item + '! ';
}
console.log(serverIndexStr);

for(let item of serverPart){ //of -> item이 출력됨
    serverPartMemberNameStr += item + '! ';
}
console.log(serverPartMemberNameStr);


serverPart.forEach(item => {
    console.log(item);
})