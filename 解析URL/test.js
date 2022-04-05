let url = 'https://ehall.xidian.edu.cn/jwapp/sys/cjcx/*default/index.do?amp_sec_version_=1&gid_=S0RtaFVxQlppa3dBQVNFK2dWSXdsQWlKb3VyWHBjZlNHdlp0MUN3ZTJUdFhNRjFLVTFyeEZwRzdRWThKTHVxa0dTUlhuUjZvQzVDcmlHNEMwaFJ2OFE9PQ&EMAP_LANG=zh&THEME=cherry#/cjcx';
function parseURL(url) {
    const parStr = /.+\?(.+)$/.exec(url)[1]
    const parArr = parStr.split("&")
    let parObj = {}

    parArr.forEach((item) => {
        if(/=/.test(item)) {
            let [key, val] = item.split("=")
            val = decodeURIComponent(val)
            val = /^\d+$/.test(val) ? parseFloat(val) : val

            if(parObj.hasOwnProperty(key)) {
                parObj[key] = [].concat(parObj[key], val)

            } else {
                parObj[key] = val
            }
        } else {
            parObj[item] = true
        }

    })
    return parObj

}

console.log(parseURL(url));
