//假设本地机器无法做加减乘除法，需要通过远程请求让服务端来实现https://www.jianshu.com/p/d5f0faa32484
//https://www.nowcoder.com/discuss/836718?channel=-1&source_id=discuss_experience_nctrack
const addRemote = async (a, b) => new Promise(resolve => {
    setTimeout(() => resolve(a + b), 1000)
})
