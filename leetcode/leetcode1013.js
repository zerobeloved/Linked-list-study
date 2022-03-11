const canThreePartsEqualSum = function(arr) {
    let temp = 0
    let cnt = 0
    let sum = arr.reduce((a,b) => {a+b})
    for(let i = 0;i<arr.length;i++) {
        temp += arr[i]
        if(temp === sum/3) {
            cnt++
            temp = 0
        }
        if(cnt === 3) return true
    }
    return false
};

let arr = [0,2,1,-6,6,-7,9,1,2,0,1]
console.log(canThreePartsEqualSum((arr)))
