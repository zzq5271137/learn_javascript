/**
 * Generator函数
 */

/*
 * 什么是Generator函数:
 * Generator函数是ES6提供的一种异步编程解决方案; 它内部可以封装多个状态, 因此又可以理解为一个状态机;
 *
 * 如何定义Generator函数:
 * 只需要在定义普通函数时, 在function关键字后面加上"*"即可;
 *
 * Generator函数和普通函数的区别:
 * 1. 调用Generator函数后, 无论函数有没有返回值, 都会返回一个迭代器对象;
 * 2. 调用Generator函数后, 函数中封装的代码不会立即被执行;
 *
 * 真正让Generator函数具备价值的是"yield"关键字:
 * 1. 在Generator函数内部使用"yield"关键字定义状态;
 * 2. 并且"yield"关键字可以让Generator函数内部的逻辑能够切割成多个部分;
 * 3. 通过调用迭代器对象的next()方法来执行一个部分的代码, 执行哪个部分就会返回哪个部分定义的状态;
 * 注意, "yield"关键字只能在Generator函数内使用, 不能在普通函数内使用;
 *
 * 在调用next()方法时可以传递一个参数, 这个参数会传递给上一个yield;
 * 注意, 第一次调用next()时不能传参;
 */

function* gen() {
    console.log("gen()执行了A");
    let res = yield "A";
    console.log(res);
    console.log("gen()执行了B");
    yield "B";
    console.log("gen()执行了C");
    yield "C";
}

let it = gen();
console.log(it.next());
console.log(it.next("zzq"));
console.log(it.next());
console.log(it.next());
