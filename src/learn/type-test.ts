// const type_test = () => {
//     let aaa :{name:'王特',tizhong:string,age:number,[test:string]:any}
//     aaa = {name:'王特',tizhong:'150',age:25,jop:"前端开发",height:170}
//     console.log(aaa)
// }
// const compute = (a:number = 1,b:number = 1) :void => {
//     console.log(a+b)
// }

// compute()
// export { type_test, compute }


// let info = { name:'xx',tizhong:'xx',age:0,jop:"xx",height:0 }
//
// const { name,tizhong,base } = info
// console.log(name,tizhong,base)

// let ren = {  name:string = '王特',tizhong:number=160,age:number=22,height:number:177}
const ren = ({name = '王特', zhong = 160, height = 177, age = 22}: { name: string, [key: string]: any }) => {
    console.log(name, zhong, height, age)
}
ren({name: '文博'})
console.log(ren)


const tetx_log1 =(obj: { name: '王特', [K: string]: any } = {name: '王特'}) => {
    console.log(obj)
}
const tetx_log2 = (name: string = '王特') => {
    console.log(name)
}

//
// enum sexs{
//     sexNan='男',
//     sexNv='女'
// }
// const data_arr:[
//     {name:string:'王特1',fen:number:66,sex:string:sexs.sexNan,you:any:''},
//     {name:string:'王特2',fen:number:56,sex:string:sexs.sexNv,you:any:''},
//     {name:string:'王特3',fen:number:46,sex:string:'男',you:any:''},
//     {name:string:'王特4',fen:number:36,sex:string:'女',you:any:''},
//     {name:string:'王特5',fen:number:86,sex:string:'男',you:any:''},
// ]
// --------- jsDoc ---------
// /**
//  * 判断同学们的成绩
//  * @param {Array} data_arr
//  * @returns {void}
//  */
// const fun = (data_arr):void=>{
//     for(var i=0;i<data_arr.length;i++){
//         if(data_arr[i].fen > 60){
//             data_arr[i].you = '优秀'
//         }else{
//             data_arr[i].you = '差'
//         }
//     }
// }
// fun(data_arr)


// enum sex_mune {
//     boy = '男',
//     girl = '女'
// }
// enum result_mune {
//     reach = 60,
//     excellent = 100
// }
// let student_arr: { name: string, sex: string, result: number }[] = [
//     {name: '王特1', sex: '男', result: 66},
//     {name: '张雨晴', sex: '女', result: 26},
//     {name: '文博', sex: '男', result: 86},
//     {name: '飞哥', sex: '男', result: 100},
//     {name: '小光', sex: '男', result: 0}
// ]
// // filter map
// const filter_result = (students:{ name: string, sex: string, result: number }[]):void => {
//     console.log(students)
//     student_arr = students.map(i=> {
//         console.log(i,"<======i")
//         return {
//             ...i
//         }
//     })
// }
// export { filter_result }
// ⬇️ ---------------------------- 优化 ---------------------------- ⬇️
// enum sex_mune {
//     boy = '男',
//     girl = '女'
// }
// enum result_mune {
//     reach = 60,
//     excellent = 100
// }
// let student_arr: { name: string, sex: string, result: number, [k:string]:any }[] = [
//     {name: '王特1', sex: '男', result: 66},
//     {name: '张雨晴', sex: '女', result: 26},
//     {name: '文博', sex: '男', result: 86},
//     {name: '飞哥', sex: '男', result: 100},
//     {name: '小光', sex: '男', result: 0}
// ]
// // filter map
// const filter_result = (students:{ name: string, sex: string, result: number ,[k:string]:any}[]):void => {
//
//     student_arr = students.map(i => {
//         return{
//             ...i,
//             res: i.result >= result_mune.reach ? '合格': '不合格'
//         }
//     })
// }
// filter_result(student_arr)
// console.log(student_arr)


// 六月四日需求 es6 数组的方法 ...
// .from()
// .of()
// .copyWithin()
// .find()
// .findIndex()
// .fill()
// .entries()
// .keys()
// .values()
// .includes()
// .map()
// .filter()
// .reduce()
// .reduceRight()
// .forEach()
// .some()
// .every()
// .sort()
// .flat()
// .flatMap()
