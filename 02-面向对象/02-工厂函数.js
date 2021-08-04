/**
 * 工厂函数
 */

/*
 * 工厂函数用于创建对象
 */
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        say: function () {
            console.log("hello world")
        }
    }
}

let obj1 = createPerson("zzq1", 101)
let obj2 = createPerson("zzq2", 102)
console.log(obj1)
console.log(obj2)
