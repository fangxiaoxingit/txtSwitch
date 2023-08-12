// 导出一个函数
function txtSwitch(curStr, cumStr = '') {
    let strList = '—□■***0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefjhijklmnopqrstuvwxyz';

    if (!curStr || curStr.length === 0) {
        alert('缺少传入参数');
        return;
    }

    return curStr.split("").map((v) => {
        const randomStr = cumStr.length ? cumStr : strList;
        return v + randomStr[Math.floor(Math.random() * randomStr.length)];
    }).join("");
}

module.exports = txtSwitch;