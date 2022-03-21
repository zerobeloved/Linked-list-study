let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
function parseURL(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1]
    const paramsArr = paramsStr.split('&')
    let paramsObj = {}
    paramsArr.forEach(param => {

    })

}

// console.log(parseURL(url));
let arr = [1,2,3]
arr.forEach(num,index => )
console.log(arr)
