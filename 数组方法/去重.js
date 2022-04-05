function flat (arr) {
    while(arr.some((item) => Array.isArray(item))) {

    }
}
let arr = [1, [2, [3]]]
let arr2 = [1,2,2,4,4,5]
console.log(flat(arr))
function unique(arr) {
    return new Set(arr)
}
unique(arr2)

const flat = (arr) => {
    while(arr.some((item)=> Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
