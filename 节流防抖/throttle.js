// const throttle = (func, wait) =>{
//     let lastTime = 0
//     return function(...args) {
//         let now = +new Date()
//         if(now - lastTime > wait) {
//             func.apply(this,args)
//             lastTime = now
//         }
//     }
// }
//
// setInterval(
//     throttle(() => {
//         console.log(1)
//     },10000),1
// )

const throttle = (func,wait) => {
    let lastTime = 0
    return function(...args) {
        let now = +new Date()
        if(now-lastTime > wait) {
            func.apply(this,args)
            lastTime = now
        }
    }
}




















