/**
 * 封装性
 */

function Person() {
    let age  // 利用变量作用域的概念, 在构造函数内使用局部变量, 可以实现封装性

    this.setAge = function (a) {
        if (a > 0) {
            age = a
        }
    }

    this.getAge = function () {
        return age
    }
}

let p = new Person()
p.setAge(20)
console.log(p.getAge())
