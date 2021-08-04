/**
 * Promise的catch()方法的特点
 */

/*
 * 和then()方法一样, 在修改Promise状态时, 可以传递参数给catch方法中的回调函数;
 */
let my_promise_1 = new Promise(function (resolve, reject) {
    reject("error")
})

my_promise_1.catch(function (data) {
    console.log("my_promise_1, 失败, data: " + data)
})

/*
 * 和then()方法一样, 同一个Promise对象可以多次调用catch()方法, 当该Promise对象的状态切换为rejected时,
 * 所有catch()方法中的回调都会被执行;
 */
let my_promise_2 = new Promise(function (resolve, reject) {
    reject()
})

my_promise_2.catch(function () {
    console.log("my_promise_2, 失败, 第一次调用catch()")
})

my_promise_2.catch(function () {
    console.log("my_promise_2, 失败, 第二次调用catch()")
})

/*
 * 和then()方法一样, catch()方法每次执行完毕后会返回一个新的Promise对象;
 * 并且, 上一个Promise对象的catch()方法可以给下一个Promise对象传递参数; 但是注意,
 * 无论是在上一个Promise对象成功的回调还是失败的回调传递的参数, 都会传递给下一个Promise对象成功的回调;
 */
let my_promise_3 = new Promise(function (resolve, reject) {
    reject("error")
})

let my_promise_3_return = my_promise_3.catch(function (data) {
    console.log("my_promise_3, 失败, data: " + data)
    return data
})

my_promise_3_return.then(function (data) {
    console.log("my_promise_3_return, 成功, data: " + data)
}).catch(function (data) {
    console.log("my_promise_3_return, 失败, data: " + data)
})

/*
 * 和then()方法一样, 如果catch()方法返回的是一个Promise对象,
 * 那么会将返回的Promise对象的执行结果中的值传递给下一个Promise对象;
 */
let my_promise_4 = new Promise(function (resolve, reject) {
    reject()
})

let my_promise_4_next = new Promise(function (resolve, reject) {
    resolve()
    // reject();
})

let my_promise_4_return = my_promise_4.catch(function () {
    console.log("my_promise_4, 失败")
    return my_promise_4_next
})

my_promise_4_return.then(function () {
    console.log("my_promise_4_return, 成功")
}).catch(function () {
    console.log("my_promise_4_return, 失败")
})

/*
 * 和then()方法传递两个参数的写法的区别在于, 使用链式的then()和catch()方法可以捕获then()方法中的异常;
 */
let my_promise_5 = new Promise(function (resolve, reject) {
    resolve("success")
})

my_promise_5.then(function (data) {
    console.log("my_promise_5, 成功, data: " + data)
    xxx  // 这里会产生异常
}).catch(function (e, data) {
    /*
     * 这里的data并不会传进来, 因为在Promise对象中执行的是成功的回调,
     * 而走到这里的catch()回调是因为在执行then()的回调时触发了异常;
     */
    console.log("my_promise_5, 失败, data: " + data + ", 异常: " + e)
})
