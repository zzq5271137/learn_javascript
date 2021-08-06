/**
 * 继承方式四
 */

/*
 * 解决 15-继承方式三.js 中的问题
 */

function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        console.log("hello world")
    }
}

function Student(name, age, score) {
    Person.call(this, name, age)

    this.score = score
    this.study = function () {
        console.log("study")
    }
}

// Student.prototype = Person.prototype
Student.prototype = new Person()  // 不把Student的原型对象指向Person的原型对象, 而是指向Person的一个实例对象
Student.prototype.constructor = Student

let s = new Student("zzq", 101, 97)
console.log(s.name)
console.log(s.age)
console.log(s.score)
s.say()
s.study()

Person.prototype.say2 = function () {
    console.log("say 2")
}
s.say2()

Student.prototype.whatever = "whatever"

let p = new Person("zzq2", 102)
console.log(p.whatever)  // 父类对象现在访问不到给子类原型对象添加的属性, 问题解决

/*
 * JavaScript中的继承方式总结:
 * 1. 在子类构造函数中添加:
 *    SuperClassFunction.call(this, arg1, arg2...)
 * 2. 将子类的原型对象指向父类的一个实例:
 *    SubClassFunction.prototype = new SuperClassFunction()
 *    SubClassFunction.prototype.constructor = SubclassFunction
 */
