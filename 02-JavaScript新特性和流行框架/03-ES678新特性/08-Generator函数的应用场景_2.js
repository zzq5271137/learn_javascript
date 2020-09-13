/**
 * Generator函数的应用场景
 */

/*
 * 利用Generator函数, 可以在任意对象上快速部署Iterator接口;
 */
let obj = {
    name: 'zzq',
    age: 27,
    gender: "male"
};

obj[Symbol.iterator] = function* () {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        yield keys[i];
    }
};

for (let key of obj) {
    console.log(key + " = " + obj[key]);
}
