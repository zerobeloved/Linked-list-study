// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("done"),1000)
// })
//
// promise.then(
//     result => console.log(result)
// )
//

// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => resolve(2),1000)
// })
// promise.then((result) => {
//     console.log(result)
// })
Promise.all = function(promiseArr){
    let index = 0, result = []
    return new Promise((resolve, reject) => {
        promiseArr.forEach((p,i) => {
            Promise.resolve(p).then( (val) => {
                index++
                result[i] = val
                if(index === promiseArr.length) {
                    resolve(result)
                }
            }, (err) => {
                reject(err)
            })
        })
    })
}
