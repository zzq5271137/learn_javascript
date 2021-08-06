/**
 * bind()、call()、apply()方法
 */

/*
 * 这三个方法都是用于修改函数或者方法中的this指向的;
 */

function test(param) {
    console.log("param:", param)
    console.log("this:", this)  // 默认是global对象
}

let obj = {
    name: "zzq"
}

/*
 * bind(): 修改函数或方法中的this为我们指定的对象, 并返回修改后的新函数
 */
let test_bind_1 = test.bind(obj, 10)
test_bind_1()
let test_bind_2 = test.bind(obj)
test_bind_2(20)

/*
 * call(): 修改函数或方法中的this为我们指定的对象, 并且立即调用修改后的函数
 */
test.call(obj, 30)

/*
 * apply(): 修改函数或方法中的this为我们指定的对象, 并且立即调用修改后的函数
 *
 * 与call()函数的区别在于, call()函数传参数, 直接在obj后分开传递即可;
 * 而apply()函数传参数, 需要将参数放到数组里;
 */
test.apply(obj, [40])
