/**
 * 构造函数优化
 */

/*
 * 解决 03-构造函数.js 中的问题
 */

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype = {
    say: function () {
        console.log("my name is " + this.name + ", my age is " + this.age)
    }
}

let obj1 = new Person("zzq1", 101)
let obj2 = new Person("zzq2", 102)

obj1.say()
obj2.say()

console.log(obj1.say === obj2.say)
