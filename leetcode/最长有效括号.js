var longestValidParentheses = function(s) {
    let stk = [0]
    let sum = 0
    let max = 0
    for(let i = 0; i< s.length; i++) {
        if(s[i] === "(") {
            stk.push(s[i])
        }
        if(s[i] === ")" && stk[stk.length-1] === "(") {
            sum++
            max = Math.max(max, sum)
            stk.push(s[i])
        }
        else if(s[i] === ")" && stk[stk.length-1] !== "(") {
            sum = 0
        }
    }
    return max
};
let s = "(()"
console.log(longestValidParentheses(s))
