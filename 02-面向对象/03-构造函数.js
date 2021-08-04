/**
 * 构造函数
 */

/*
 * 构造函数和工厂函数一样, 都是用于创建对象的;
 *
 * 构造函数和工厂函数的区别:
 * 1. 构造函数的函数名称首字母必须大写
 * 2. 构造函数只能通过new关键字来调用
 * 3. 构造函数的对象赋值, 使用this
 * 3. 工厂函数需要把对象return出去, 构造函数不需要
 */
function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        console.log("my name is " + this.name + ", my age is " + this.age)
    }
}

let obj1 = new Person("zzq1", 101)
let obj2 = new Person("zzq2", 102)
console.log(obj1)
console.log(obj2)
obj1.say()
obj2.say()

// 使用===来判断两个函数是否存储在同一块内存中
console.log(obj1.say === obj2.say)  // false

/*
 * 通过以上打印, 可以看到, 两个对象的say()方法存储在了不同的内存空间中;
 * 但其实, 他们的代码是一样的, 所以有内存空间的浪费问题;
 */
