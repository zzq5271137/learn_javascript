/**
 * Iterator接口
 */

/*
 * 什么是Iterator:
 * Iterator又叫迭代器, 是一种接口; 它规定了不同数据类型统一访问的机制, 这里的访问机制主要是指数据的遍历;
 * 在ES6中, Iterator接口主要供for(let...of...)消费;
 *
 * 默认情况下以下数据类型都已经实现了Iterator接口:
 * Array、Map、Set、String、TypedArray、函数的arguments对象、NodeList对象等等;
 *
 * 只要一个数据已经实现了Iterator接口, 那么这个数据就有一个叫做[Symbol.iterator]的属性;
 */
let arr = [1, 3, 5];
for (let value of arr) {
    console.log(value)
}
console.log(arr[Symbol.iterator]);

/*
 * 可以单独使用next()方法来获取迭代的值;
 */
let arr2 = [1, 3, 5];
let it = arr2[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
