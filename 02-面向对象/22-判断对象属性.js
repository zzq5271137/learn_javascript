/**
 * 判断对象属性
 */

class Person {
    constructor(name) {
        this.name = name
    }

    age = undefined
}

Person.prototype.species = "human"

let p = new Person("zzq")

/*
 * in的特点: 只要原型链上的对象包含该属性, 就会返回true
 */
console.log("name" in p)  // true
console.log("age" in p)  // true
console.log("species" in p)  // true

/*
 * hasOwnProperty方法特点: 只会在对象本身查找, 不会在原型链中查找
 */
console.log(p.hasOwnProperty("name"))  // true
console.log(p.hasOwnProperty("age"))  // true
console.log(p.hasOwnProperty("species"))  // false
