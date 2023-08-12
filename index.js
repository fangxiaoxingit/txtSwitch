// 导出一个函数
function txtSwitch(curStr, cumStr) {
    let strList = '—□■***0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefjhijklmnopqrstuvwxyz';
    let cumStr = ''
    let curStr = ''
    if (curStr.trim().length == 0) {
        console.log(`缺少传入文本`);
        return ''
    }
    return curStr.split("").map(
        (v) =>
        (v =
            v + cumStr.length ? cumStr.split("")[parseInt(Math.random() * cumStr.length)] : strList[parseInt(Math.random() * strList.length)])
    )
        .join("")
}

module.exports = txtSwitch;