/**
 * JavaScript的异常处理机制
 */

/*
 * 和Java类似, JavaScript使用 try{}catch{}finally{} 来处理异常, 以保证程序的运行不会中断;
 */
try {
    console.log("1")
    xxx  // 会产生异常
    console.log("2")
} catch (e) {
    console.log(e)
} finally {
    console.log("finally")
}
