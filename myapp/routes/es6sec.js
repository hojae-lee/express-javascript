const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send("hello es6sec");
});

console.log("================hello es6sec==============");

let str = "godori is ee irodog";

//startsWith() 시작 문자열 여부
//endsWith() 끝 문자열 여부
//includes() 문자열이 포함되어 있느니 여부 판단.
console.log(str.startsWith("godori")); //true
console.log(str.endsWith("irodog")); //true
console.log(str.endsWith("is")); //false
console.log(str.includes("is")); //true
console.log(str.includes("ee")); //true
console.log(str.includes("godori")); //true

console.log("================hello for-in==============");

//for-in문
const data = ["irodog", "roodig"];
//자바스크립트는 프로토타입 기반 언어.
Array.prototype.getIndex = "godori";

//자기 자신에게는 없는 상위 프로토타입의 값도 포함 될 수 있다.
for (let idx in data) {
    console.log(data[idx]);
}

console.log("================hello for-of==============");
//for-of문
//index가 아닌 value 순회를 함.
for (let value of data) {
    console.log(value);
}

console.log("==============생성자===============");

var person = {
    //프로퍼티
    'name': 'lee',
    //프로퍼티에 담겨있는 함수,메소드
    'intro': function () {
        return "jaaaa" + this.name;
    }
}

console.log(person.name);
console.log(person.intro());



/*
싱글쓰레드인 자바스크립트에서 비동기 처리를 위해서 콜백(callback)을 사용해왔다.
덕분에 비동기 처리를 온전히 해낼 수 있었지만 이런 콜백이 사용되는 경우가 많아지면서 단점이 드러났다.
그 단점은 비동기 처리를 순차적으로 실행할 필요가 있는 경우에 비동기 처리를 중첩시켜서 표현하므로 에러,예외처리가 어렵다는 것과 
중첩으로 인한 복잡도가 증가하는 것이다.
*/

const promise = (param) => {
    return new Promise((resolve, reject) => {
        if (param) {
            resolve("바보"); //성공했을 때
        } else {
            reject("아닌데"); //실패했을 때
        }
    });
}
//프로미스 실행
promise(true).then((result) => {
    console.log("=============promise(프로미스)==============");
    console.log(result); //바보
}), (err) => {
    console.log(err); //아닌데
}

/*
    프로미스의 생성 방법은 new Promise((resolve,reject){}) 로 생성하는 방법이다.
    promise 함수를 보면 프로미스를 리턴하는데 이것은 프로미스안에서 비동기 함수를 실행하고 성공했을 때 resolve()를 실행하고 실패 또는 에러가 났을때
    reject()를 실행한다.
    .then(success, fail)메소드로 실행하면 된다.

    프로미스는 상태를 갖는다.(fullfilled상태면 resolve()실행,rejected면 reject()실행)
    비동기 함수를 만들어서 사용해야 할 때 프로미스 객체를 리턴하게 만들어서 사용하면 콜백 지옥을 방지할 수 있다
*/

//여러 개의 프로미스가 모두 완료되었을 때 실행하는 방법
//Promise.all()을 사용하면 파라미터로 갖는 모든 프로미스가 완료되면 수행하고 프로미스들의 값을 보여준다.
const param = true;
const promise1 = new Promise((resolve, reject) => {
    if (param) {
        resolve("바보1");
    } else {
        reject("아닌데1");
    }
});
const promise2 = new Promise((resolve, reject) => {
    if (param) {
        resolve("바보2");
    } else {
        reject("아닌데");
    }
});
Promise.all([promise1, promise2]).then((values) => {
    console.log(values); //[바보1,바보2]
});

//접근자 프로퍼티
console.log("===============get,set==================");
let user = {
    firstName: "Dong",
    lastName: "Kihotae",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        this.firstName = value.split(" ")[0];
        this.lastName = value.split(" ")[1];
    }
};
// get은 값을 가져오고 set은 값을 할당해준다.
console.log(user.fullName); // Dong Kihotae
user.fullName = "Kim Pabchunguk";
console.log(user.fullName); // Kim Pabchunguk

//나이 프로퍼티 예제
let age = {
    age: 25,
    get getAge() {
        return `${this.age}살 입니다.`;
    },
    set setAge(value) {
        this.age = value;
    }
};
console.log(age.getAge); //25살입니다.

age.setAge = 30;
console.log(age.getAge); //30살입니다.

//프로토타입 상속
/*
프로토타입에서 상속받은 프로퍼티를 상속 프로퍼티 라고 합니다.
__proto__는 프로토타입용 getter/setter 입니다. 즉 프로토타입 링크 라고 입니다.
Object.getPrototypeOf, setPrototypeOf를 더 많이 쓰고 있는 추세이다. __proto__는 하위호완성
때문에 사용하고 브라우저, 모든 호스트 환경에서 지원하고 있다.
*/
let animal = {
    barks(value) {
        console.log(value);
    }
};
let dog = {
    __proto__: animal
};

dog.barks("멍멍");

//프로퍼티 수정은 객체에 직접 할당.
dog.barks = function () {
    console.log("멈멈!?");
};

dog.barks();

//함수의 prototype 프로퍼티
/*
프로퍼티란 객체를 구성하는 데이터블록
new 를 사용하여 새로운 객체를 만들 수 있음.
O.prototype 이 객체이면 new 는 O.prototype을 사용해 새롭게 생성된 객체의 프로로타입을 설정합니다.
밑은 프로토타입으로 간단한 예제를 만듬.
*/

function Human() {}
Human.prototype = {
    hello: "helloworld"
};

let hum = new Human();
console.log(hum.hello); //helloworld

//1.이미 만들어진 객체가 있어서 선언해도 적용되지 않는다.
// Human.prototype = {};
console.log(hum.hello); //helloworld

//2.참조에 의해 할당됩니다.
Human.prototype.hello = "helloworld2";
console.log(hum.hello); //helloworld2

//네이티브 프로토타입 (Object.prototype)
//프로토타입 함수(timeset) 만들기
Object.prototype.timeset = function(ms){
    setTimeout(this, ms);
}

function f() {
    console.log("Hello!");
}

f.timeset(1000); // 1초 후 "Hello!" 출력

//프로토타입 메서드와 __proto__ 가 없는 객체
//object.create(proto);
/*
__proto__에 대해 설명한 글을 올린 것이 있을 것이다.
__proto__는 키로 사용이 불가능하다. 항상 객체이거나 null인 형태를 가지고 있어야 하기 때문이다.
__proto__는 구식의 방법 
object.create(proto);
object.getPrototypeOf(obj); obj의 Prototype을 반환합니다.
object.setPrototypeOf(obj, proto); obj의 Prototype을 proto 설정합니다.
밑에 예제를 보며 내용을 이해해보자.
*/

let cats = {
    barks: "냐옹냐옹"
};

//프로토타입이 cats인 새로운 객체를 생성
let strayCat = Object.create(cats,{
    sad: {
        value: "흐냙냙"
    }
}); //strayCat 길고양이

console.log(strayCat.sad); //흐냙냙
console.log(strayCat.barks); //냐옹냐옹
console.log(Object.getPrototypeOf(strayCat) === cats); //true

Object.setPrototypeOf(strayCat, { //strayCat의 프로퍼티 happy추가.
    happy: "그르릉"
});
console.log(strayCat.happy); //그르릉

//Prototype을 get/set을 이용하여 바꿀 수 있지만 자바스크립트의 속도를 생각하면 쓰지 않는 것이 현명하다.
//프로토타입을 정의만 하면 사용하는 것이 바람칙한 방향이다.

module.exports = router;