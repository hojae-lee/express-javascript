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

module.exports = router;