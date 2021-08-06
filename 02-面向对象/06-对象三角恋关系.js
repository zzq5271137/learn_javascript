/**
 * 对象三角恋关系
 */

/*
 * 1. 每个"构造函数"中都有一个默认的属性, 叫做prototype, prototype属性保存着一个对象, 这个对象我们称之为"原型对象"
 * 2. 每个"原型对象"中都有一个默认的属性, 叫做constructor, constructor指向当前"原型对象"对应的那个"构造函数"
 * 3. 通过"构造函数"创建出来的对象我们称之为"实例对象", 每个"实例对象"中都有一个默认的属性, 叫做__proto__,
 *    __proto__指向创建它的那个"构造函数"的"原型对象"
 */

function Person(name, age, species) {
    this.name = name
    this.age = age
    this.species = species
    this.say = function () {
        console.log("object_say()")
    }
}

Person.prototype = {
    species: "prototype_species",
    say: function () {
        console.log("prototype_say()")
    }
}

let obj = new Person("zzq", 100, "object_species")

console.log(Person.prototype)
console.log(obj.__proto__)
console.log(Person.prototype === obj.__proto__)

console.log(Person)
console.log(Person.prototype.constructor)
