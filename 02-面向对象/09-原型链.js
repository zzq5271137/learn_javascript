/**
 * 原型链
 */

/*
 * 通过对象的__proto__属性, 可以找到创建它的那个构造函数的原型对象, 然后原型对象的__proto__属性, 又指向上一层的原型对象,
 * 最终, 会指向Object原型对象, 然后Object原型对象的__proto__属性指向null;
 * 这样形成的一条链路, 即为原型链;
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
    constructor: Person,  // 对比 04-构造函数优化.js, 添加constructor的指定, 目的是不破坏原有的关系
    species: "prototype_species",
    say: function () {
        console.log("prototype_say()")
    }
}

console.log(Person)
console.log(Person.prototype.constructor) // 对比 04-构造函数优化.js 的输出结果, 这里变为了Person
console.log(Person.prototype.constructor === Person)

let p = new Person("zzq", 100, "human")

/*
 * 访问对象的属性和方法时, 查找的规则是先从对象本身去寻找; 找不到时, 按照原型链的方向, 向上查找;
 */
console.log(p.species)
p.say()
