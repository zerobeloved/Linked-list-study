var compress = function(chars) {
    let first = 0
    let res = []
    const charLen = chars.length
    for(let i = 0;i<charLen;i++) {
        if(i-first === 0 && chars[i] !== chars[i+1]) {
            res.push(chars[i])
        }
        else if(chars[i] !== chars[i+1] || i-first != 0) {
            if(i-first < 10) {
                res.push(chars[i])
                res.push(`"${i-first}"`)
            } else {
                while((i-first)/10 > 0) {
                    const index = Math.floor((i-first) / 10)
                    res.push(chars[i])
                    res.push(`"${index}"`)
                }
            }
            first = i

        }
    }
    return res
};

let chars = ["a","a","b","b","c","c","c"]
console.log(compress(chars))
