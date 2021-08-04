/**
 * Promise的then()方法
 */

/*
 * then()方法可以接收两个参数:
 * 1. 第一个参数是状态切换为fulfilled(resolved)时的回调;
 * 2. 第二个参数是状态切换为rejected时的回调;
 */
let my_promise_1 = new Promise(function (resolve, reject) {
    resolve()  // 将Promise对象的状态切换为fulfilled(resolved)
    // reject();  // 将Promise对象的状态切换为rejected
})

my_promise_1.then(function () {
    console.log("my_promise_1, 成功")
    console.log("zzq")
}, function () {
    console.log("my_promise_1, 失败")
})

/*
 * 在修改Promise()状态时(调用resolve()或者reject()时), 是可以传递参数给then()方法中的回调函数的;
 */
let my_promise_2 = new Promise(function (resolve, reject) {
    // resolve("success");
    reject("error")
})

my_promise_2.then(function (data) {
    console.log("my_promise_2, 成功, data: " + data)
}, function (data) {
    console.log("my_promise_2, 失败, data: " + data)
})

/*
 * 同一个Promise对象可以多次调用then()方法, 当该Promise对象的状态切换为fulfilled(resolved)时,
 * 所有then()方法中的回调都会被执行;
 */
let my_promise_3 = new Promise(function (resolve, reject) {
    resolve()
    // reject();
})

my_promise_3.then(function () {
    console.log("my_promise_3, 第一次调用then(), 成功")
}, function () {
    console.log("my_promise_3, 第一次调用then(), 失败")
})

my_promise_3.then(function () {
    console.log("my_promise_3, 第二次调用then(), 成功 ")
}, function () {
    console.log("my_promise_3, 第二次调用then(), 失败")
})

/*
 * then()方法每次执行完毕之后都会返回一个新的Promise对象;
 * 并且, 可以通过上一个Promise对象的then()方法, 给下一个Promise对象的then()方法传递参数;
 * 注意, 无论是在上一个Promise对象成功的回调还是失败的回调传递的参数, 都会传递给下一个Promise对象成功的回调;
 */
let my_promise_4 = new Promise(function (resolve, reject) {
    // resolve("success");
    reject("error")
})

let my_promise_4_return = my_promise_4.then(function (data) {
    console.log("my_promise_4, 成功, data: " + data)
    return data
}, function (data) {
    console.log("my_promise_4, 失败, data: " + data)
    return data
})

my_promise_4_return.then(function (data) {
    console.log("my_promise_4_return, 成功, data: " + data)
}, function (data) {
    console.log("my_promise_4_return, 失败, data: " + data)
})

/*
 * 如果then()方法返回的是一个Promise对象, 那么会将返回的Promise对象的执行结果中的值传递给下一个Promise对象;
 */
let my_promise_5 = new Promise(function (resolve, reject) {
    // resolve("success_1");
    reject("error_1")
})

let my_promise_5_next = new Promise(function (resolve, reject) {
    resolve("success_2")
    // reject("error_2");
})

let my_promise_5_return = my_promise_5.then(function (data) {
    console.log("my_promise_5, 成功, data: " + data)
    return my_promise_5_next
}, function (data) {
    console.log("my_promise_5, 失败, data: " + data)
    return my_promise_5_next
})

my_promise_5_return.then(function (data) {
    console.log("my_promise_5_return, 成功, data: " + data)
}, function (data) {
    console.log("my_promise_5_return, 失败, data: " + data)
})
