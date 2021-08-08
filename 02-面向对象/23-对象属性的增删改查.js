/**
 * 对象属性的增删改查
 */

class Person {
}

let p = new Person()

// 增
p.name = "zzq"
p.species = "human"
p["say"] = function () {
    console.log("say")
}

// 删
delete p.name
delete p["say"]

// 改
p.species = "jojo"
p["species"] = "jojo2"

// 查
console.log(p.species)
console.log(p["species"])
