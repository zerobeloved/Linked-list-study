// function deepClone(obj) {
//     if(typeof obj != 'object' || obj === null) {
//         return obj
//     }
//
//     let copy = {}
//
//     if(obj.constructor === Array) {
//         copy = []
//     }
//     for(let key in obj) {
//         if(obj.hasOwnProperty(key)) {
//             copy[key] = deepClone(obj[key])
//         }
//     }
//     return copy
// }

const deepClone = (obj) => {
    if(typeof obj != 'object' || obj === null) {
        return obj
    }
    let copy = {}
    if(obj.constructor === Array) {
        copy = []
    }
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key])
        }
    }
    return copy

}



let user = {
    name: "John",
    age: 30
};

let clone = { ...user }//浅拷贝
console.log(clone)














