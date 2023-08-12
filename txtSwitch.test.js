const txtSwitch = require('./index.js');

test('txtSwitch', () => {
    let txt = '一个人在十三四岁的夏天，在路上捡到一支真枪，因为年少无知，天不怕地不怕，他扣下扳机，没有人死，也没有人受伤，他认为自己开了空枪。后来他三十岁或者更老，走在路上，听到背后有隐隐约约的风声，他停下来，回过身去，子弹正中眉心。-史铁生'
    const res = txtSwitch(txt,{customStr: '-',repeatTimes: '3t'})
    console.log(res)
    expect(res).not.toBeUndefined();
    
})