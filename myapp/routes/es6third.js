const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send("hello es6sec");
});

//정적 메소드와 정적 프로퍼티
/*
prototype이 아닌 클래스 함수 자체에 메서드를 설정 할 수도 있습니다. 이런 메소드를 정적 메서드라고 부릅니다.
*/

console.log("===================es6third.js======================");

//정적 메서드는 static 키워드를 붙여 생성할 수 있습니다.
class User {
    static staticMethod() {
        console.log(this === User);
    }
}

//정적 메서드는 메서드를 프로퍼티 형태로 직접 할당하는 것과 동일한 일을 합니다.
User.staticprotoMethod = function () {
    console.log(this === User);
}

//같은 결과가 나옵니다.
User.staticMethod(); //true
User.staticprotoMethod(); //true

//정적 프로퍼티
//chrome에서만 동작
class Article {
    static publisher = "Ilya Kantor";
}

console.log(Article.publisher);

//프로퍼티 보호하기
//protected 프로퍼티 명 앞엔 밑줄 _ 이 붙습니다.
class CoffeeMachine {
    _waterAmount = 0; // 물통에 차 있는 물의 양

    set waterAmount(value){
        if(value < 0) {
            throw new Error("물의 양은 음수가 될 수 없습니다.");
        }
        this._waterAmount = value;
        console.log(`${this._waterAmount} 추가 되었습니다.`);
    }
    
    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power){
        this.power = power;
        console.log(`전력량이 ${power}인 커피머신을 만듭니다.`);
    }
}

//커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

//물 추가
coffeeMachine.waterAmount = 20;

console.log("================promise basic======================");
//프라미스
let promise = new Promise((resolve, reject) => {

    //1초 뒤에 일이 성공적으로 끝낫다는 신호와 함께 done이 result가 됩니다.
    // setTimeout(() => resolve("done"), 1000); 
});

promise.then(
    result => console.log(result),
    error => console.log(error)
);

let promise1 = new Promise((resolve, reject) => {
    resolve("Hello");

    setTimeout(() => { //무시당함.
        resolve(2)
    });
});
// promise1.then(
//     result => {
//         console.log(result);
//     },
//     error => {
//         console.log(error);
//     }
// );
// output은 Hello 두번째 호출 resolve는 무시된다. reject, resolve 중 오직 하나의 호출만 되기 떄문에.

//프라미스 체이닝 
// new Promise((resolve, reject) => {
//     resolve(1);
// }).then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 2;
// });
//promise.then을 호출하면 프라미스가 반환되기 때문입니다. 반환한 값은 result가 됩니다.
//아래와 같이 프라미스 하나에 여러개의 then을 추가한 경우는 체이닝이 아닙니다. 독립적으로 움직이기 때문에...
// let promise2 = new Promise((resolve, reject) => {
//     resolve(1);
// });

// promise2.then(
//     (result) => {
//         console.log(result); //1
//         return result * 2;
//     }
// );
// promise2.then(
//     (result) => {
//         console.log(result); //1
//         return result;
//     }
// );

//프라미스 자체를 반환하여 비동기 작업 체인 만들기
// new Promise((resolve, reject) => {
//     resolve(1);
// }).then(result => {
//     console.log(result); // 1
//     return new Promise((resolve, reject) => { //중간에 비동기 로직을 만들어 프라미스를 반환하는 것도 가능.
//        resolve(result * 2);
//     });
// }).then((result) => {
//     console.log(result); //2
// });

//프라미스 체인은 에러를 잘 처리합니다. 프라미스가 거부되면 제어 흐름이 제일 가까운 rejection 핸들러로 넘어갑니다.
//암시적 try...catch 예외가 발생하면 예뢰를 잡고 이를 reject라고 다룹니다.
// new Promise((resolve, reject) => {
//     throw new Error("에러가 발생!");
// }).catch(console.log);

//프라미스화
//콜백을 받는 함수를 프라미스를 반환하는 함수로 바꾸는 것을 프라미스화 라고 합니다.
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () =>{
//         callback(null, script);
//     }
//     script.onerror = () =>{
//         callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));
//     }
//     document.head.append(script);
// }

// let loadScriptPromise = function(src){
//     return new Promise((resolve, reject) => {
//         loadScript(src, (err, script) => {
//             if(err) reject(err)
//             else resolve(script);
//         })
//     });
// }

console.log("=========async, await============");
// async, await 를 알고 있으면 프라미스를 좀 더 편하게 사용할 수 있습니다.
async function f(){ //async는 function 앞에 위치합니다.
    return 1;
}
f().then((result) => {
    console.log(result); //1
});
//async를 붙이면 해당 함수는 항상 프라미스를 반환합니다. 프라미스가 아닌 값을 반환하더라도 이행 상태의 프라미스(resolve)로 값을 감싸 이행된 프라미스가 나오도록합니다.
// async function f(){ 위 함수와 같은 함수 이다.
//     return Promise.resolve(1);
// }
//async 가 붙은 함수는 반드시 프라미스를 반환하고 프라미스가 아닌 것은 프라미스로 감싸 반환합니다.
//await는 async 함수 안에서만 동작하는 합니다.
//자바스크립트는 await 키워드를 만나면 프라미스가 처리될때 까지 기다립니다.

async function p(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    let result = await promise; //프라미스가 이행 될 때까지 기다림
    console.log(result);
}

p();
// 함수를 호출하고 함수 본문이 실행되는 도중에 let result = await promise; 로 표시한 줄에서 실행이 잠시 중단되었다가 프라미스가 처리되면
// 실행이 재개됩니다. 이 때 프라미스 객체의 result 값이 변수 result에 할당됩니다. 따라서 위 예시를 실행하면 1초 뒤에 '완료!'가 출력됩니다.


module.exports = router;