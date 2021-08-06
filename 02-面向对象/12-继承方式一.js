/**
 * 继承方式一
 */

function Person() {
    this.name = "zzq"
    this.age = 100
    this.say = function () {
        console.log("hello world")
    }
}

function Student(score) {
    this.score = score
    this.study = function () {
        console.log("study")
    }
}

Student.prototype = new Person()
Student.prototype.constructor = Student

let s = new Student(1000)

console.log(s.name)
console.log(s.age)
s.say()

console.log(s.score)
s.study()

/*
 * 此种方式的弊端为, 创建子类对象时, 无法指定父类对象的属性值;
 *
 * 例如, 如果Person类的构造函数为 Person(name, age), 则我们可以在创建Person实例时指定姓名和年龄;
 * 但是, 创建Student实例时, 无法指定这几个属性值;
 */
