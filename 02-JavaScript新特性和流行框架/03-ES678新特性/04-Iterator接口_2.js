/**
 * Iterator接口
 */

/*
 * 使用Iterator接口, 自己实现一个Array;
 */
class MyArray {
    constructor() {
        for (let i = 0; i < arguments.length; i++) {
            // this[0] = 1
            // this[1] = 3
            // this[2] = 5
            this[i] = arguments[i];
        }
        this.length = arguments.length;
    }

    [Symbol.iterator]() {
        let index = 0;
        let that = this;
        return {
            next() {
                if (index < that.length) {
                    return {
                        value: that[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

let arr = new MyArray(1, 3, 5);
for (let value of arr) {
    console.log(value)
}
