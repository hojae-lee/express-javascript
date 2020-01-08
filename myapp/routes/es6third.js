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

//

module.exports = router;