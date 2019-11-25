const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
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
const data = ["irodog","roodig"];
//자바스크립트는 프로토타입 기반 언어.
Array.prototype.getIndex = "godori";

//자기 자신에게는 없는 상위 프로토타입의 값도 포함 될 수 있다.
for(let idx in data){
    console.log(data[idx]);
}

console.log("================hello for-of==============");
//for-of문
//index가 아닌 value 순회를 함.
for(let value of data){
    console.log(value);
}

console.log("==============생성자===============");

var person = {
    //프로퍼티
    'name' : 'lee',
    //프로퍼티에 담겨있는 함수,메소드
    'intro' : function(){
        return "jaaaa"+this.name;
    }
}

console.log(person.name);
console.log(person.intro());


console.log("=============promise(프로미스)==============");

/*
싱글쓰레드인 자바스크립트에서 비동기 처리를 위해서 콜백(callback)을 사용해왔다.
덕분에 비동기 처리를 온전히 해낼 수 있었지만 이런 콜백이 사용되는 경우가 많아지면서 단점이 드러났다.
그 단점은 비동기 처리를 순차적으로 실행할 필요가 있는 경우에 비동기 처리를 중첩시켜서 표현하므로 에러,예외처리가 어렵다는 것과 
중첩으로 인한 복잡도가 증가하는 것이다.
*/

const promise = (param) =>{
    return new Promise((resolve,reject)=>{
        if(param){
            resolve("바보"); //성공했을 때
        }
        else{
            reject("아닌데"); //실패했을 때
        }
    });
}
//프로미스 실행
promise(true).then((result)=>{
    console.log(result);//바보
}),(err) =>{
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
const promise1 = new Promise((resolve,reject)=>{
    if(param){
        resolve("바보1");
    }
    else{
        reject("아닌데1");
    }
});
const promise2 = new Promise((resolve,reject)=>{
    if(param){
        resolve("바보2");
    }
    else{
        reject("아닌데");
    }
});
Promise.all([promise1,promise2]).then((values)=>{
    console.log(values);//[바보1,바보2]
});



module.exports = router;