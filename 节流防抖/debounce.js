// func是用户传入需要防抖的函数
// wait是等待时间
const debounce = (func, wait) => {
    let timer = 0
    return function(...args) {
        if(timer) {clearTimeout}
        setTimeout(() => {
            func.apply(this,args)
        },wait)
    }
}
