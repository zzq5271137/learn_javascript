/**
 * Symbol类型
 */

/*
 * 什么是Symbol类型:
 * Symbol类型是ES6中新增的一种数据类型, 被划分到了基本数据类型中;
 * 基本数据类型: 字符串、数值、布尔、undefined、null、Symbol
 * 引用数据类型: Object
 *
 * Symbol的作用:
 * 用来表示一个独一无二的值;
 *
 * 如何生成一个Symbol值:
 * let xxx = Symbol();
 *
 * 为什么需要Symbol():
 * 在企业开发中, 如果需要对一些第三方插件、框架进行自定义的时候, 可能会因为添加了同名的方法或属性,
 * 导致将框架原有的方法或属性覆盖掉, 为了避免这种情况的发生, 框架的作者或者我们就可以使用Symbol作为属性或者方法的名称;
 * 详见下方示例;
 *
 * 如何区分Symbol:
 * 在通过Symbol()生成独一无二的值的时候, 可以设置一个标记, 这个标记仅仅用于区分, 没有其他任何含义;
 */

let name = Symbol("name");
let say = Symbol("say");
let obj = {
    [name]: "zzq",  // 注意点, 如果要使用变量作为对象属性的名称, 必须要使用中括号[]
    [say]: function (time) {
        console.log("hello " + time);
    }
};
console.log(obj);
obj.name = "zzq2";
console.log(obj);
