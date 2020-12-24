/* object생성자 함수*/
const person = new Object();

//프로퍼티 추가 
person.name = '김채원'; //점 표기법으로 접근
person.part = 'server';
person["gender"] = 'female'; //브라켓 표기법 접근
person.sayHello = function () {
    console.log(`안녕하세요 ${this.name} 입니다.`);
}
console.log(typeof person);
console.log(person);
person.sayHello();

console.log('=====================');


/*객체 리터럴 (가장 일반적인 객체 생성 방식)*/
const emptyObject = {}; //빈 객체 생성
console.log(typeof emptyObject);

const animal = {
    type: "dog",
    name: "뽀삐",
    friends: ["코코", "쿠키", "초코"],
    bark: function () {
        console.log(`${this.name}: 멍멍`);
    },
    thisFriends: function () {
        this.friends.forEach(friend => {
            console.log(`${this.name}의 친구: ${friend}`);
        })
    }
}
console.log(animal);
animal.bark();
animal.thisFriends();