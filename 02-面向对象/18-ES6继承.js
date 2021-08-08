/**
 * ES6继承
 */

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    say() {
        console.log("Person say")
    }
}

class Student extends Person {
    constructor(name, age, score) {
        // 类似于之前 Person.call(this, name, age)
        super(name, age)

        this.score = score
    }

    study() {
        console.log("study")
    }
}

let s = new Student("zzq", 100, 90)
console.log(s.name)
console.log(s.age)
console.log(s.score)
s.say()
s.study()
