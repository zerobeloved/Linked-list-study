function debounce(func, wait) {
    let timeout
    return () => {
        let context = this
        let args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait)
    }
}
