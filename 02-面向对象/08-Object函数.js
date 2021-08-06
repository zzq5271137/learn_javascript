/**
 * Object函数
 */

/*
 * 1. Object构造函数也是Function函数的实例, 即Object函数的__proto__指向Function原型对象
 * 2. Function原型对象和其他构造函数的原型对象的__proto__属性, 指向Object原型对象
 * 3. Object函数比较特殊的一点是, 它的原型对象的__proto__指向null
 */

function Person(name, age) {
    this.name = name
    this.age = age
}

console.log(Object.__proto__ === Function.prototype)

console.log(Object.prototype.constructor === Object)

console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Person.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)
