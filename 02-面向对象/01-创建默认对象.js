/**
 * 创建默认对象
 */

/*
 * JavaScript中提供了一个默认的类, Object, 我们可以通过这个类来创建对象;
 * 使用Object类来创建对象有两种方式:
 * 1. new
 * 2. {}
 */

// 方式一
let obj1 = new Object()
obj1.name = "zzq1"  // 添加属性
obj1.say = function () {  // 添加行为
    console.log("hello world 1")
}
console.log(obj1.name)
obj1.say()

// 方式二
let obj2 = {
    name: "zzq2",
    say: function () {
        console.log("hello world 2")
    }
}
console.log(obj2.name)
obj2.say()
