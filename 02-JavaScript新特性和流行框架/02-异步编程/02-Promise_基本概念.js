/**
 * Promise基本概念
 */

/*
 * 什么是Promise:
 * Promise是ES6中新增的异步编程解决方案, 在代码中的表现是一个对象;
 *
 * Promise的作用:
 * 在企业开发中为了保证异步代码的执行顺序, 那么就会出现回调函数层层嵌套的现象; 如果回调函数嵌套的层数太多,
 * 就会导致代码的阅读性和可维护性大大降低; Promise对象可以将异步操作以同步流程来表示,
 * 避免了回调函数的层层嵌套(回调地狱);
 *
 * 以下例子分别演示未使用Promise和使用Promise的情况;
 * 需求: 从网络上加载3个资源, 要求加载完资源1才能加载资源2, 以此类推; 若前面任何一个资源加载失败, 后续资源都不加载
 */

// 未使用Promise
function without_promise() {
    console.log("未使用Promise");

    function request(success) {
        setTimeout(function () {  // 使用定时器模拟网络请求获取数据
            success("图片数据")
        }, 1000);
    }

    request(function (data) {
        console.log(data, 1);
        request(function (data) {
            console.log(data, 2);
            request(function (data) {
                console.log(data, 3);
            });
        });
    });
}

// 使用Promise
function with_promise() {
    console.log("使用Promise");

    function request() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {  // 使用定时器模拟网络请求获取数据
                resolve("图片数据")
            }, 1000);
        })
    }

    request().then(function (data) {
        console.log(data, 1);
        return request()
    }).then(function (data) {
        console.log(data, 2);
        return request()
    }).then(function (data) {
        console.log(data, 3);
    });
}

// without_promise();
with_promise();
