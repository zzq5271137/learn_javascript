/**
 * 获取对象类型
 */

function Person(name, age) {
    // 代码运行时, 实际上是这样的:
    // let obj = new Object()
    // let this = obj

    this.name = name
    this.age = age
    this.say = function () {
        console.log("say")
    }

    // return this
}

let o = new Object()
console.log(typeof o)  // object

let a = new Array()
console.log(typeof a)  // object

let p = new Person()
console.log(typeof p)  // object

/*
 * 都打印 object 的原因是, 使用构造函数创建对象时, 在构造函数的内部的头部和尾部实际上系统默认加上了一些代码(上面Person构造函数中的那些),
 * 即实际上, 使用构造函数创建对象, 都是通过new一个Object对象来实现的; 所以使用typeof打印出来的都是object;
 */

// 想要正确打印出对象的真实类型, 可以使用以下方式
console.log(a.constructor.name)
console.log(p.constructor.name)
