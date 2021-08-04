/**
 * Generator函数的应用场景
 */

/*
 * Generator函数是异步编程解决方案, 使用同步的流程来表示异步的操作;
 */
function request() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("图片数据")
        }, 1000)
    })
}

function* gen() {
    yield request()
    yield request()
    yield request()
}

let it = gen()
it.next().value.then(function (data) {
    console.log(data, 1)
    return it.next().value
}).then(function (data) {
    console.log(data, 2)
    return it.next().value
}).then(function (data) {
    console.log(data, 3)
    return it.next().value
})
