/**
 * Iterator的应用场景
 */

/*
 * 解构赋值的原理就是使用了Iterator;
 */
let arr = [1, 2]
let [a, b, c] = arr
console.log("a = " + a + ", b = " + b + ", c = " + c)

/*
 * 扩展运算符的原理也是使用了Iterator;
 */
let arr1 = [1, 3]
let arr2 = [2, 4]
let arr3 = [...arr1, ...arr2]
console.log(arr3)
