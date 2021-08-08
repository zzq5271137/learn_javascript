/**
 * isPrototypeOf方法
 */

/*
 * isPrototypeOf方法用于判断一个对象是否是另一个对象的原型对象
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

let p = new Person("zzq")
let s = new Student("zzq", 0)

/*
 * 只要指定的原型对象出现在了该实例对象的原型链中, isPrototypeOf就会返回true
 */
console.log(Person.prototype.isPrototypeOf(p))
console.log(Person.prototype.isPrototypeOf(s))
