function FindGreatestSumOfSubArray(array)
{
    // write code here
    let dp =[]
    dp[0] = array[0]
    for(let i = 1; i < array.length; i++) {
        dp.push(dp[0])
        let now = dp[0]
        for(let j = 1; j<=i; j++) {
            now = Math.max(now + array[j], array[j])
            dp[i] = Math.max(dp[i], now)
        }
    }
    return Math.max(...dp)
}

let arr = [1,-2,3,10,-4,7,2,-5]
console.log(FindGreatestSumOfSubArray(arr))
