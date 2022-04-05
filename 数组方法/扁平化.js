// function flatten(arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr);
//     }
//     return arr;
// }

const flatten = (arr) => {
    while(arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
