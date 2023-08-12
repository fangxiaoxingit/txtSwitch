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

更多 **txtSwitch** 的信息和使用详情，可以查阅其 [npm页面](https://www.npmjs.com/package/txtswitch) 和 [GitHub仓库](https://github.com/fangxiaoxingit/txtSwitch)。