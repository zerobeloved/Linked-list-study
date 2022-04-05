const promise1 = () => Promise.resolve(1);
const promise2 = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
const promise3 = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(3);
        }, 3000);
    });

const promiseList = [promise1, promise2, promise3];

/**
 * 创建一个 Promise Chain ，实现顺序 Promise 的串行调用
 * @param {Array} promiseList Promise 组成的数组
 */
function promiseChain(promiseList) {
    // 代码实现
    promiseList[0]().then(value =>{console.log(value)})
        .then(promiseList[1]().then(value => {console.log(value)}))
        .then(promiseList[2]().then(value => {console.log(value)}))
}

promiseChain(promiseList).then(() => {
    console.log('所有 Promise 执行完毕。');
});

/**
 期望输出结果：

 1 // 立即输出
 2 // 2s 后输出
 3 // 3s 后输出
 所有 Promise 执行完毕。
 **/

// 创建一个 Promise Chain ，实现有序 Promise 的串行调用：
