/**함수선언식**/
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));

/**함수표현식**/
var addStr = function (x, y) {
    return x + y;
}
console.log(addStr("안녕", "하세요"));

/**화살표 함수 **/
var add = (x, y) => {
    return x + y;
}

//로직이 한줄일 때는 return 문 생략가능
add = (x, y) => x + y;
add = (x, y) => (x + y);

console.log(add(4,5));

//매개변수 하나일 때 소괄호 생략 가능
var square = (x) => x * x;
square = x => x * x;

console.log(square(3));

//객체를 리턴하고 로직이 한줄일 때는 소괄호로 감싸줘야함
var person = function (name, age) {
    return {
        name: name,
        age: age,
    };
}

person = (name, age) => ({
    name: name,
    age: age
});

console.log(person("김채원",22));