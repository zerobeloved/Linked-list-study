const isValid = function(s) {
    let map = new Map([
        [")","("],
        ["}","{"],
        ["]","["]
    ])
    let stk = []
    for(let i=0;i<s.length;i++) {
        if(map.has(s[i])) {
            if(!stk.length ||stk[stk.length-1]  !== map.get(s[i])) {
                return false
            }
            stk.pop()
        } else
        stk.push(s[i])
    }
    return !stk.length
};

let arr = "()"
console.log(isValid(arr))
