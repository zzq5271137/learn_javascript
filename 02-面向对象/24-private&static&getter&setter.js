/**
 * private&static&getter&setter
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_class_fields
 */

class Person {
    #name
    #age
    static #species = "human"

    constructor(name) {
        this.#name = name
    }

    get name() {
        return this.#name
    }

    set name(v) {
        this.#name = v
    }

    get age() {
        return this.#age
    }

    set age(v) {
        if (v > 0 && v <= 100) {
            this.#age = v
        } else {
            this.#age = 0
        }
    }

    static species() {
        return Person.#species
    }

    static #privateSay(content) {
        return `hello ${content}`
    }

    static publicSay(content) {
        console.log(Person.#privateSay(content))
    }

    #privateIntro() {
        return `my name is ${this.#name}`
    }

    publicIntro() {
        console.log(this.#privateIntro())
    }

}

let p = new Person("zzq")
console.log(p.name)

p.age = -20
console.log(p.age)

console.log(Person.species())

Person.publicSay("ghost")

p.publicIntro()
