let s = "       the sky is blue "
const reverse = (s) => {
    s.trim()
    let i = 0
    let ans = []
    let j = 0
    while(j < s.length && s[j] !== " ") {
        j++
        ans.unshift(s.slice(i,j))
        
    }

}
console.log(s.trim());

