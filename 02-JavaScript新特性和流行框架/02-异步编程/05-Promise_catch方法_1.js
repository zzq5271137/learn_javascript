/**
 * Promise的catch()方法简介
 */

/*
 * catch()方法其实是 then(undefined, () => {}) 的语法糖; 即, 一个没有成功的回调、只有失败的回调的then()方法;
 */
let my_promise_1 = new Promise(function (resolve, reject) {
    // resolve();
    reject();
});

my_promise_1.catch(function () {
    console.log("my_promise_1, 失败");
});

/*
 * catch()方法可以和then()方法进行链式使用, 即then()方法监听成功, catch()方法监听失败;
 * 其实就相当于过去向then()方法中传递两个回调的写法;
 * 但是注意, 如果想要达到"then()方法监听成功, catch()方法监听失败"的效果, catch()方法必须和then()方法链式使用,
 * 不能分开监听(即不能用这个Promise对象分别调用then()方法和catch()方法);
 */
let my_promise_2 = new Promise(function (resolve, reject) {
    // resolve();
    reject();
});

my_promise_2.then(function () {  // 这种写法其实就相当于过去向then()方法中传递两个回调的写法
    console.log("my_promise_2, 成功");
}).catch(function () {
    console.log("my_promise_2, 失败");
});
