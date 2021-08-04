/*
 * async函数和await
 */

/*
 * 一句话, async函数就是Generator函数的语法糖; "async"关键字修饰的函数表示该函数里有异步操作;
 * 而在该函数内, 使用"await"关键字表示紧跟在后面的表达式需要等待结果(需要等待异步操作执行完成才能进行下面的代码);
 *
 * 详见:
 * 1. http://www.ruanyifeng.com/blog/2015/05/async.html
 * 2. https://www.cnblogs.com/datiangou/p/9759607.html
 */

function request() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("图片数据")
        }, 1000)
    })
}

async function gen() {
    let data1 = await request()
    console.log(data1, 1)
    let data2 = await request()
    console.log(data2, 2)
    let data3 = await request()
    console.log(data3, 3)
}

gen()
