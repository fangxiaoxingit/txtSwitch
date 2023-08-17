# txtSwitch Usage Guide

[中文](https://github.com/fangxiaoxingit/txtSwitch "中文说明") | [English](https://github.com/fangxiaoxingit/txtSwitch/blob/main/README.en.md "English")

------------


\*\*txtSwitch\*\* is an npm package for processing text that can help you randomly insert specific characters between text characters. For example:

A man in his early teens, in the summer, picked up a real gun on the road. Because he was young and ignorant, fearless of heaven and earth, he pulled the trigger. No one died, no one was hurt, he thought it was a blank. Later when he was thirty years old or even older, walking on the road, he heard a faint rustling sound behind him. He stopped and looked back, the bullet hit him right between the eyes. - Lao She

After converting: 

\*\*一-个-人-在-十-三-四-岁-的-夏-天-,-在-路-上-捡-到-一-支-真-枪-,-因-为-年-少-无-知-,-天-不-怕-地-不-怕-,-他-扣-下-扳-机-,-没-有-人-死-,-也-没-有-人-受-伤-,-他-认-为-自-己-开-了-空-枪-。-后-来-他-三-十-岁-或-者-更-老-,-走-在-路-上-,-听-到-背-后-有-隐-隐-约-约-的-风-声-,-他-停-下-来-,-回-过-身-去-,-子-弹-正-中-眉-心-。---史-铁-生-\*\*

Here are the steps to install and use \*\*txtSwitch\*\*.

## Installation

First, you need to install Node.js and npm on your computer. You can install from the following links:

- [Node.js download](https://nodejs.org/en/download/)
- [npm installation guide](https://www.npmjs.cn/getting-started/)

Then open the terminal or command line window, and install \*\*txtSwitch\*\* through npm:

```bash
npm install txtswitch
```

## Usage

After installing \*\*txtSwitch\*\*, you can now use it in your JavaScript code. First, import \*\*txtSwitch\*\* at the top of your file: 

```javascript
import txtSwitch from 'txtSwitch';
```

Then you can use the `txtSwitch` function. This function takes two parameters, the first is the text you want to process, and the second is the character you want to insert:

```javascript
var result = txtSwitch('Hello, world!', 'X'); 
```

The `txtSwitch` function will randomly insert 'X' between each character in 'Hello, world!', and return the processed string. So the `result` variable will contain the processed string. 

You can use this `result` variable, for example print it out:

```javascript
console.log(result);
```

# txtSwitch Function Parameter Description

Here are the detailed descriptions of the `txtSwitch` function parameters:

| Parameter | Type | Required | Default | Description |
|-|-|-|-|-|
| data | String | Required | None | The string to process | 
| options | Object | Optional | `{ customStr: '—□■\*\*\*|', repeatTimes: 1}` | Custom options including custom string of characters to insert and number of repeats |

## Detailed options Object Properties

| Property | Type | Required | Default | Description |
|-|-|-|-|-|
| customStr | String | Optional | '—□■\*\*\*|' | Custom characters to insert into data |
| repeatTimes | Number | Optional | 1 | Number of times to repeat insertion of characters |

> Note: The `options` parameter is an object that includes `customStr` and `repeatTimes` properties. If `options` is not provided, the function will use default options. If the `options` object does not have `customStr` and/or `repeatTimes` properties, the function will use the defaults for any missing properties.

To use the `txtSwitch` function, call the function in your code, passing the `data` and `options` parameters, as shown in this example:

```javascript
let options = { customStr: 'X', repeatTimes: 2 };
txtSwitch('Hello, world!', options); 
```

For more information and usage details on \*\*txtSwitch\*\*, refer to its [npm page](https://www.npmjs.com/package/txtswitch) and [GitHub repository](https://github.com/fangxiaoxingit/txtSwitch).

Translate By https://claude.ai/