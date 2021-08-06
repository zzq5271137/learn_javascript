/**
 * 继承方式二
 */

/*
 * 之前讲到, 使用call()函数可以改变函数中的this指向;
 * 构造函数, 也是函数, 也可以使用call()来改变构造函数中的this指向;
 * 利用这一点, 可以实现继承;
 */

function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        console.log("hello world")
    }
}

function Student(name, age, score) {
    Person.call(this, name, age)  // 使用call()函数来实现继承

    this.score = score
    this.study = function () {
        console.log("study")
    }
}

let s = new Student("zzq", 101, 97)
console.log(s.name)
console.log(s.age)
console.log(s.score)
s.say()
s.study()

/*
 * 但使用这种方式继承, 有一个弊端, 即这种方式只不过是"借用"了父类的构造函数而已;
 * 本质上来说, Student类和Person类是没有关系的;
 *
 * 比如, 下面的例子
 */
Person.prototype.say2 = function () {
    console.log("say 2")
}

s.say2()  // 会报错, 因为Person原型对象, 并不在Student实例的原型链上
