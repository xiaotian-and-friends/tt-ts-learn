// let info = { name:'xx',tizhong:'xx',age:0,jop:"xx",height:0 }
const { name,tizhong,base = '一万五' } = info

/**
 * 计算 a + b
 * @param {Number} a
 * @param {Number} b
 * @returns {number}
 */
const compute = (a = 1,b = 1) => {
    return a+b
}
let a = 2

compute()
console.log(name,tizhong,base)
export  {compute}