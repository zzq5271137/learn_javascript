/**
 * Function函数
 */

/*
 * 1. JavaScript中函数是引用类型(对象类型), 既然是对象, 所以也是通过构造函数创建出来的,
 *    所有函数都是通过Function构造函数创建出来的对象
 * 2. JavaScript中只要是"函数", 就有prototype属性, "Function函数"的prototype属性指向"Function原型对象"
 * 3. JavaScript中只要是"原型对象"就有constructor属性, "Function原型对象"的constructor指向它对应的构造函数
 * 4. JavaScript中万物皆对象, 只要是对象就有__proto__属性; "Function函数"的__proto__属性指向"Function原型对象"
 */

function Person(name, age) {
    this.name = name
    this.age = age
}

console.log(Function)
console.log(Function.prototype)
console.log(Function.prototype.constructor)
console.log(Function === Function.prototype.constructor)

console.log(Person.__proto__)
console.log(Person.__proto__ === Function.prototype)

console.log(Function.__proto__ === Function.prototype)
