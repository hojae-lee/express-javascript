//node.js에서는 require 메서도르르 통해 외부 모듈을 가져 올 수 있습니다. 
const express = require('express');
const router = express.Router();

router.get("/",function(req,res){
    res.send("hello es6first");
});

console.log("hello es6first");

console.log("=============es6배열=============");
const langs = ['javascript','java','python'];
const [js, ...a] = langs;

console.log("js= "+js);
console.log("a[0]="+a[0]);
console.log("a[1]="+a[1]);
console.log("langs[0]="+langs[0]);

console.log("============es함수인자============");

const func = (name, val) =>{
    console.log(name+val);
}
func("이름","입니다");

console.log("============var,let,const==========");
var message = "hi";
{
    var message = "bye";
}
console.log(message);

let message1 = "hi";
{
   let message1 = "bye";
}
console.log(message1); //hi

if(true) {
    var age = 25;
    console.log("age: "+age);
}
console.log("age: "+age);

if(true) {
    let age1 = 25;
    console.log("age1: ",age1); //25
}
let age1 = 30;
console.log("age1: ",age1); //30

// const는 어떤 특정한 블록을 가리킨다. 새로운 것을 array에 집어 넣을때 특정 블록에 넣을때 주소는 변함이 없고 요소가 추가 되는것일 뿐. 값 재할당이 불가능하다!.
const age2 = 15; //상수이므로 값을 바꿀 수 없음. 정수나 문자열은 바꿀 수 없음./
const str = "jupeter";

console.log(age2+str);

//const도 이런 경우에는 바꿀 수 있다!.
const ages = [15,20,25];
ages.push(30);

console.log("ages"+ages);

const obj = {
    key : "jupeter",
    occu : "coder"
}
console.log(obj);

obj.key = "super";

console.log("obj.key를 super로 변환",obj);

//인스턴스: 여러개의 객체를 만들기 위한 함수?..
//프로퍼티(property): 객체 내의 변수라고 생각하면댐.

//모듈이란 관련된 코드들을 하나의 코드 단위로 캡슐화 하는 것을 말한다. 모듈은 기본적으로 객체..
//module.exports 와 exports는 call by reference로 동일한 객체를 바라보고 있고 리턴되는 값은 항상 module.exports입니다.
//express.Router()가 리턴한 객체에 일부 프로퍼티를 수정 후 객체자체를 모듈로 리턴한 것 입니다.
module.exports = router;
