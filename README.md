# txtSwitch 使用说明

**txtSwitch** 是一个用于处理文本的 npm 包，它可以帮助你在文本字符之间随机插入特定字符。

以下是如何安装和使用 **txtSwitch** 的步骤。

## 安装

首先，你需要在你的计算机上安装 Node.js 和 npm。可以从以下链接安装：

- [Node.js下载地址](https://nodejs.org/en/download/)
- [npm安装教程](https://www.npmjs.cn/getting-started/)

然后打开终端或命令行窗口，通过 npm 安装 **txtSwitch**：

```bash
npm install txtswitch
```

## 使用

安装完 **txtSwitch** 后，现在可以在你的 JavaScript 代码中使用它。首先，使用 import 语句在你的文件顶部引入 **txtSwitch**：

```javascript
import txtSwitch from 'txtSwitch';
```

然后你可以使用 `txtSwitch` 函数。这个函数接收两个参数，第一个是你要处理的文本，第二个是你想插入的字符：

```javascript
var result = txtSwitch('Hello, world!', 'X');
```

`txtSwitch` 函数将会在 'Hello, world!' 这个字符串的每个字符之间随机插入 'X'，然后返回处理后的字符串。那么 `result` 变量将包含处理后的字符串。

你可以使用这个 `result` 变量，比如可以将它打印出来：

```javascript
console.log(result);
```
# txtSwitch 函数参数说明

以下是 `txtSwitch` 函数的参数的详细说明：

| 参数     | 类型   | 必需性 | 默认值 | 描述         |
|----------|--------|------|---------|-------------|
| data     | String | 必需  | 无     | 需要处理的字符串 |
| options  | Object | 可选  | `{ customStr: '—□■***|', repeatTimes: 1}` | 自定义选项，包括插入字符的自定义字符串和重复的次数 |

## options 对象详细属性

| 属性        | 类型   | 必需性 | 默认值 | 描述         |
|------------|--------|------|---------|-------------|
| customStr   | String | 可选  | '—□■***|' | 插入数据的自定义字符 |
| repeatTimes | Number | 可选  | 1     | 插入字符的重复次数 |

> 注意: `options` 参数是一个对象，包括了 `customStr` 和 `repeatTimes` 属性。如果不提供 `options` 参数，函数将会使用默认选项。如果 `options` 对象没有 `customStr` 和/或 `repeatTimes` 属性，函数将针对缺失的属性使用默认值。

为了使用 `txtSwitch` 函数，应在代码中调用函数，并传入 `data` 和 `options` 参数，如下例子所示：

```javascript
let options = {
  customStr: 'X',
  repeatTimes: 2
};

txtSwitch('Hello, world!', options);
```

更多 **txtSwitch** 的信息和使用详情，可以查阅其 [npm页面](https://www.npmjs.com/package/txtswitch) 和 [GitHub仓库](https://github.com/fangxiaoxingit/txtSwitch)。