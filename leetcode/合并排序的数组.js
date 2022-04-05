// let A = [1,2,3,0,0,0], m = 3
// let B = [2,5,6],       n = 3
// const merge = function(A, m, B, n) {
//     let Ap = 0, Bp = 0
//     let res = []
//     while(Ap<m || Bp<n) {
//         if(Ap>=m) {
//             res.push(B[Bp])
//             Bp++
//             continue
//         }
//         if(Bp>=n) {
//             res.push(A[Ap])
//             Ap++
//             continue
//         }
//         if(A[Ap] < B[Bp]) {
//             res.push(A[Ap])
//             Ap++
//         } else if(A[Ap] >= B[Bp]) {
//             res.push(B[Bp])
//             Bp++
//         }
//     }
//     A = [].concat(res)
//     return A
// };
// console.log(merge(A,m,B,n))
let A = [1,2,3,0,0,0]
let B = [1,3,4]
A.splice(0,A.length,...B)
console.log(A)
let D = [...A]


