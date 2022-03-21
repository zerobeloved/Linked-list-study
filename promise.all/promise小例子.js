let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("done"),1000)
})

promise.then(
    result => console.log(result)
)
