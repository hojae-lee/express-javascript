const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send("hello basic javascript");
});

console.log("===========welcome javascript================");

/*
자바스크립트는 객체이다. 함수도 객체이다.
프로토타입은 객체의 숨겨진 링크인 프로토타입을 가진다.(Prototype) 
자바스크립트는 유연한 언어이면서 뛰어난 표현력을 가지고 있다.
자바스크립트를 둘러싼 중요한 논란 중 하나가 전역 객체의 존재때문이다. 최상위 레벨의 객체들은 모두
전역 객체 안에 위치하기때문에 충돌의 위험성이 있다.(그래서 let,const 가 나왔따....)
*/

//자바는 클래스 안에 생성자가 생성되있고 생성자를 호출하는 것을 통해서 클래스의 객체를 생성한다.
//자바스크립트는 생성자가 어디에 속해있지 않음. 그저 함수... 함수를 new를 통해 객체를 생성

function Person(){}

var p = new Person();

p.name = 'welcome';
p.intro = 'javascript';

console.log(p.intro);

var p1 = new Person();

p1.name = 'welcome1';
p1.intro = 'javascript1';

console.log(p1.intro);

function PersonData(data){
    this.data = data;
    this.intros = function(){
        return "my data is " + this.data;
    } 
}

const names = "welcomejavascript";
var pd = new PersonData(names);
console.log(pd.intros());


console.log("==============this================");

var o = {
    //func라는 프로퍼티를 생성.
    func:function(){
        if(o===this){
            console.log("0===this");
        }
    }
}
o.func();

console.log("===============상속================");

function Personthis(data1){
    Personthis.prototype.data1 = data1;
    Personthis.prototype.intros2 = function(){
        return "my data1 is " + this.data1;
    }
}

function Programmer(data1){
    this.data1 = data1;
}

var p2 = new Personthis("hello!!");
console.log(p2.intros2());

Programmer.prototype = new Personthis();
var pg = new Programmer("hello!!!");

console.log(pg.intros2());


console.log("===============리터럴객체================");

var foo = new Object();

foo.name = "foo";
foo.age = "30";
foo.gender = "male";

console.log(foo);
console.log(typeof foo); 

//리터럴 방식으로 객체 생성
var coo = {
    name : 'coo',
    age : '27',
    gender : 'male'
};
console.log(coo);

console.log("==============프로토타입==================");
//prototype 원형(원래의 형태) 상속기능을 제공함.
//prototype이라는 프로퍼티에 객체의 원형이 저장 되어 있음.
//생성자를 통해 만든 객체에 프로토타입이라는 객체가 저장 되어있다.

function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
var s = new Super();
Sub.prototype = s;

var sub = new Sub();
console.log(sub.ultraProp); //true

console.log("==============표준 내장 객체의 확장==================");
//Object,Function,Array,String,Boolean,Number,Math,Date,RegExp(정규식)

//배열에서 특정한 값을 랜덤하게 추출하는 코드
var arr = new Array("seoul","newyork","ladarkh","pusan","Tsukuba");
function getRandomValueFromArray(haystack){
    var index = Math.floor(haystack.length*Math.random());
    return haystack[index];
}
console.log(getRandomValueFromArray(arr));

Array.prototype.rand = function(){
    var randomindex = Math.floor(this.length*Math.random());
    return this[randomindex];
}
var arrays = new Array("seoul","newyork","ladarkh","pusan","Tsukuba");

console.log(arrays.rand());

console.log("=============Object=====================")
//Object객체는 객체의 가장 기본적인 형태를 가지고 있는 객체. 아무것도 상속받지 않는 순수한 객체다.
//자바스크립트에서는 값을 저장하는 기본적인 단위로 Object를 사용한다.
//그렇기에 동시에 자바스크립트의 모든 객체는 Object객체를 상속받으며 Object객체의 프로퍼티를 가지고 있다.

//Object.keys() 어떤 배열에 키값을 리턴하는 메소드
var arr = ["a","b","c"];
console.log("Object.keys(arr)",Object.keys(arr));

var o = {
    name:"egoing",
    age:"25",
    city:"seoul"
};
console.log(Object.keys(o));

//Object.prototype.toString() 배열이 가지고 있는 값만을 가지고 옴.
var o = [1,2,3]
console.log(o.toString());

//Object 객체는 확장하지 않는 것이 바람직함. 모든 객체에 영향을 주기 때문이다.
Object.prototype.contain = function(data){
    for(var name in this){
        if(this[name] === data){
            return true;
        }
    }
    return false;
}

var o ={
    name: "egoing",
    city: "seoul"
}
console.log(o.contain("egoingdd"));

//예를들어 이런식으로 for문을 돌렷는데 name,city라는 객체가 나온 후 contain이라는 프로퍼티가 튀어나옴.
for(var name in o){
    console.log(name);
}

//for in 은 객체에 포함된 모든 프로퍼티에 대해 루프를 수행 할 수 있다.
//prop변수에 foo객체의 프로퍼티가 하나씩 할당
//prop에 할당된 프로퍼티 이름을 이용해서 foo[prop]를 사용하여 value값을 추출 할 수 있다.
var foo = {
    name:"foo",
    age:30,
    major:"computer science"
}

for(var prop in foo){
    console.log(prop,foo[prop]);
}

console.log("==========================프로토타입 체이닝=======================")

//프로토타입 체이닝
/*
자바와 같은 객체지향 프로그래밍에서는 클래스를 정의하고 이를 통해 객체를 생성하지만, 자바스크립트에서는 이러한 클래스 개념이 없다.
대신에 객체 리터럴이나 앞서 설명했던 생성자 함수로 객체를 생성한다. 이렇게 생성된 객체의 부모 객체가 바로 프로토타입 객체이다.
즉 상속 개념과 마찬가지로 자식 객체는 부모 객체가 가진 프로퍼티 접근이나 메서드를 상속받아 호출 하는 것이 가능하다.
자바스크립트의 모든 객체는 자신의 부모인 프로토타입 객체를 카리키는 참조 링크 형태의 숨겨진 프로퍼티가 있다.
이러한 링크를 암묵적 프로토타입 링크 라고 부르며 프로토타입링크 라고 부른다.
프로토타입 프로퍼티와 객체의 숨은 프로퍼티인 프로토타입 링크를 잘 구분해야 한다.
*/
function Person(name){
    this.name = name;
}

//foo 객체 생성
var foo = new Person("foo");

console.dir(Person);
console.dir(foo);

var myObject = {
    name:"foo",
    sayName: function(){
        console.log("my name is"+this.name);
    }
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name')); //true
console.log(myObject.hasOwnProperty('nickName')); //false
//myObject.sayNickName();

/*
프로토타입 체이닝이란 자바스크립트에서 특정 객체의 프로퍼티나 메서드에 접근하려고 할때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면
프로토타입링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티를 차례대로 검색하는 것을 프로토타입 체이닝이라고 말한다.
*/

function Person2(name,age,hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

var fooo = new Person2("foo",30,"tennis");

//프로토타입 체이닝
//hasOwnProperty는 인자로 전달된 속성의 이름이 객체의 속성인지 여부를 판한단다.
console.log(fooo.hasOwnProperty('name')); //true

//Person.prototype 객체 출력
console.dir(Person2.prototype);

function Person3(name){
    this.name = name;
}

var soo = new Person3("soo");

Person3.prototype.HelloWor = function(){
    console.log("HelloWor");
}

soo.HelloWor();

function Person4(name){
    this.name = name;
}

Person4.prototype.getName = function(){
    return this.name;
}

var noo = new Person4("noo");
console.log(noo.getName());
Person4.prototype.name = "person";
console.log(Person4.prototype.getName());

console.log("==============클로저=================");
//클로저는 내부함수가 외부함수의 context에 접근 할 수 있는 것을 가르킨다.

function outter(){
    let outtertext = "밖에 녀석";
    function inner(){
        console.log(outtertext);
    }
    inner();
}
outter();

function out(){
    let outtext = "리턴된 함수"
    return function(){
        console.log(outtext);
    }
}
inside = out();
inside();

//getter,setter느낌 
function factory_movie(title){
    return{
        get_title : function(){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie("ghost");
matrix = factory_movie("matrix");

console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title("setghost");
console.log(ghost.get_title())

module.exports = router;