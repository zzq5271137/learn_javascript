/**
 * Generator函数的应用场景
 */

/*
 * 让函数返回多个值;
 */
function* calculate(a, b) {
    yield a + b
    yield a - b
}

let it = calculate(10, 5)
console.log("sum = " + it.next().value)
console.log("sub = " + it.next().value)
