/**
 * 属性方法分类
 */

/*
 * 在JavaScript中, 属性和方法分为两类:
 * 1. 实例属性/实例方法
 * 2. 静态属性/静态方法
 */

function Person(name) {
    this.name = name  // 实例属性
    this.say = function () {  // 实例方法
        console.log("hello world")
    }
}

let p = new Person("zzq")
p.age = 100  // 实例属性(动态添加)
p.run = function () {  // 实例方法(动态添加)
    console.log("run")
}

Person.species = "human"  // 静态属性(动态添加)
Person.work = function () {  // 静态方法(动态添加)
    console.log("work")
}
