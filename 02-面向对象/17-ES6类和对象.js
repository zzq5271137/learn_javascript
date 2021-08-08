/**
 * ES6类和对象
 */

class Person {
    /*
     * 构造方法
     */
    constructor(name, age) {
        /*
         * 实例属性
         */
        this.name = name
        this.age = age
    }

    /*
     * 实例方法
     * 备注: 这样定义方法, 该方法会被自动添加进原型对象里; 如果不想添加进原型对象, 需要将方法定义在构造方法constructor中
     */
    say() {
        console.log("hello")
    }

    /*
     * 静态属性
     * 备注: 标准的ES6中, 并不支持这样的静态属性的定义; 想要定义静态属性, 需要像以前一样, 使用 Person.species 的方式;
     */
    static species = "human"

    /*
     * 静态方法
     */
    static eat() {
        console.log("eat")
    }
}

let p = new Person("zzq", 123)
console.log(p.name)
console.log(p.age)
p.say()

console.log(Person.species)
Person.eat()
