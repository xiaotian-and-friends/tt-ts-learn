enum sex_mune {
    boy = '男',
    girl = '女'
}
enum result_mune {
    reach = 60,
    excellent = 100
}
let student_arr: { name: string, sex: string, result: number, [k:string]:any }[] = [
    {name: '王特1', sex: '男', result: 66},
    {name: '张雨晴', sex: '女', result: 26},
    {name: '文博', sex: '男', result: 86},
    {name: '飞哥', sex: '男', result: 100},
    {name: '小光', sex: '男', result: 0}
]
// filter map
const filter_result = (students:{ name: string, sex: string, result: number ,[k:string]:any}[]):void => {
    student_arr = students.map(i => {
        let res:string = ''
        i.result >= result_mune.reach && (res = '合格')
        i.result < result_mune.reach && (res = '不合格')
        i.result == result_mune.excellent && (res = '优秀')
        return{
            ...i,
            res
        }
    })
}
filter_result(student_arr)
console.log(student_arr)
