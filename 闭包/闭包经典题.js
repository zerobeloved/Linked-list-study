// for(let i = 0;i<3;i++) {
//
//     const log = () => {
//         console.log(i)
//     }
//     setTimeout(log,100)
// }

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}
let counter = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
