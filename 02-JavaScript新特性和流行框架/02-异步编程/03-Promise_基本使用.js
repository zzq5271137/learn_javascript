/**
 * Promise基本使用
 */

/*
 * 如何创建Promise:
 * new Promise(function(resolve, reject){});
 * 创建Promise对象时, 里面传入了一个function, 但是注意, Promise对象不是异步的, 只要创建Promise对象,
 * 就会立即执行这个function;
 *
 * Promise是如何实现通过同步的流程来表示异步的操作的:
 * Promise对象是通过状态的改变来实现的, 只要状态发生改变, 就会自动触发对应的函数;
 *
 * Promise对象的三种状态:
 * 1. pending:
 *    默认状态, 只要没有告诉Promise任务是成功还是失败, 就是pending状态;
 * 2. fulfilled(resolved):
 *    只要调用resolve函数, 状态就会变为fulfilled, 表示操作成功;
 * 3. rejected:
 *    只要调用reject函数, 状态就会变为rejected, 表示操作失败;
 * 注意, Promise对象的状态一旦改变即不可逆, 例如从pending变为fulfilled, 那么永远都是fulfilled,
 * 或者从pending变为rejected, 那么永远都是rejected;
 *
 * 监听Promise对象状态的改变:
 * 我们可以通过函数来监听Promise对象状态的变化, 一旦状态发生变化, 就会调用对应的回调函数, 对应关系为:
 * 1. fulfilled(resolved) -> then()
 * 2. rejected -> catch()
 */

console.log("1");

let my_promise = new Promise(function (resolve, reject) {
    console.log("2");
    resolve();
    reject();  // 状态不可逆
});

console.log("3");

my_promise.then(function () {
    console.log("then")
}).catch(function () {
    console.log("catch")
});
