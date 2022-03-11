var isSubsequence = function(s, t) {
    let sp = 0, tp
    for(tp=0;tp<t.length;t++) {
        if(s[sp] === t[tp]) {
            sp++
        }
    }
    if(sp === s.length) {
        return true
    }else {
        return false
    }
};
let s = "abc", t = "ahbgdc"
console.log(isSubsequence(s, t));
