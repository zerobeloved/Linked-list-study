var addStrings = function(num1, num2) {
    let add = 0,ans = []
    for(let i = 1;i<=num1.length || i<=num2.length|| add>0;i++) {
        const x = i<num1.length? num1[num1.length-i] - '0' : 0
        const y = i<num2.length? num2[num2.length-i] - '0' : 0
        let result = x + y + add
        add = Math.floor(result / 10)
        ans.push(result % 10)
    }
    return ans
};
let num1 = "11", num2 = "123"
console.log(addStrings(num1, num2));
console.log(num1[0])
