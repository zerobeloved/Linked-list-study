// func是用户传入需要防抖的函数
// wait是等待时间
// const debounce = (func, wait) => {
//     let timer = 0
//     return function(...args){
//         if(timer)clearTimeout
//         timer = setTimeout(()=> {
//             func.apply(this,args)
//         },1000)
//     }
//
// }


const debounce = (func,wait) => {
    let timer = 0
    return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=> {
            func.apply(func,args)
        },1000)
    }
}




















