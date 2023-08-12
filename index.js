function txtSwitch(data, options) {
    if (!data || data.length === 0) {
        throw new Error("Data value is required");
    }
    let curStr = JSON.stringify(data);
    let defaultStr = '—□■***|';
    let curOptions = {
        customStr: options.customStr ? options.customStr : defaultStr,
        repeatTimes: Number.isInteger(options.repeatTimes) ? options.repeatTimes : 1
    };

    if (typeof curOptions.repeatTimes !== 'number') {
        throw new Error("repeatTimes must be a number");
    }

    return curStr.split("").map((v) => {
        return v + curOptions.customStr[Math.floor(Math.random() * curOptions.customStr.length)].repeat(curOptions.repeatTimes);
    }).join("");
}

module.exports = txtSwitch;