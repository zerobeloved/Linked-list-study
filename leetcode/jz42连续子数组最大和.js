let arr = [1, 1, 2,22323,2,1,3,4,5,5,5,22323,2323232323, 2, 3]

const flatten = (arr)=>{
    let set = new Set(arr)

    return [...set]
}

console.log(flatten(arr))
