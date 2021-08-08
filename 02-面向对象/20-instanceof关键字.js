/**
 * instanceof关键字
 */

/*
 * instanceof关键字用于判断"对象"是否是指定构造函数的"实例"
 */

class Person {
    constructor(name) {
        this.name = name
    }
}

class Student extends Person {
    constructor(name, score) {
        super(name)
        this.score = score
    }
}

let p = new Student("zzq", 98)

/*
 * 只要指定的构造函数的原型对象出现在了该实例对象的原型链中, instanceof就会返回true
 */
console.log(p instanceof Student)  // true
console.log(p instanceof Person)  // true
console.log(p instanceof Object)  // true
