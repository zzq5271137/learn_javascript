/**
 * 继承方式三
 */

/*
 * 解决 14-继承方式二.js 中的问题
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

// 将Student的原型对象指向Person的原型对象
Student.prototype = Person.prototype
Student.prototype.constructor = Student

let s = new Student("zzq", 101, 97)
console.log(s.name)
console.log(s.age)
console.log(s.score)
s.say()
s.study()

// 问题解决
Person.prototype.say2 = function () {
    console.log("say 2")
}
s.say2()

/*
 * 但其实, 这种方式依然存在问题;
 * 即, Person原型对象的constructor现在指向了Student构造函数, 破坏了原有的三角恋关系;
 *
 * 并且, 现在Person(父类)的原型对象和Student(子类)的原型对象是同一个对象,
 * 如果我们将来给子类原型对象添加属性或方法, 父类也会被添加; 这其实不符合"继承"的概念;
 */
Student.prototype.whatever = "whatever"

let p = new Person("zzq2", 102)
console.log(p.whatever)  // 父类对象访问到了给子类原型对象添加的属性, 这有问题
