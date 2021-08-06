/**
 * prototype
 */

/*
 * prototype特点:
 * 1. 存储在prototype中的属性和方法, 可以被对应构造函数创建出来的所有对象共享;
 * 2. 构造函数中如果出现了与prototype中同名的属性或方法, 那么对象访问的该属性或方法是构造函数中定义的;
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
console.log(obj.species)
obj.say()
