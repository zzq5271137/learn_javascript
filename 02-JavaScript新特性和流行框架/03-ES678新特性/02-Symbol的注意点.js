/**
 * Symbol的注意点
 */

/*
 * Symbol做类型装换的时候, 不能转换成数值(但可以转换成其他的, 比如字符串、布尔等);
 */
try {
    let my_symbol_1 = Symbol("my_symbol_1");
    console.log(String(my_symbol_1));
    console.log(Boolean(my_symbol_1));
    console.log(Number(my_symbol_1));
} catch (e) {
    console.log(e);
}

/*
 * Symbol不能做任何的运算;
 */
try {
    let my_symbol_2 = Symbol("my_symbol_2");
    console.log(my_symbol_2 + 1);
} catch (e) {
    console.log(e);
}

/*
 * for循环无法遍历出对象中使用Symbol定义的属性和方法;
 */
let name = Symbol("name");
let age = Symbol("age");
let obj = {
    [name]: "zzq",
    [age]: "27",
    studentId: 820064,
    gender: "male",
    say: function () {
        console.log("hello");
    }
};

for (let key in obj) {
    console.log(key + " = " + obj[key]);  // 遍历不出name和age
}

console.log(Object.getOwnPropertySymbols(obj));  // 使用Object.getOwnPropertySymbols()方法可以获取一个对象的所有Symbol属性和方法
