# entry-check

> 小程序页面入参检查



[![NPM](https://nodei.co/npm/entry-check.png)](https://nodei.co/npm/entry-check/)

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
  - [ES6](#es6)
- [Extra Sections](#extra-sections)
  - [支持检查的数据类型](#)
  - [小程序使用场景](#)
- [API](#api)
- [Example](#example)
- [License](#license)

<!-- tocstop -->

## Install

```javascript
npm i entry-check
```

## Usage
### ES6
```javascript
import EC from 'entry-check';

const [err] = await EC(config, opts);
if (err) {
  // 处理检查报错
  return;
}
```

## Extra Sections
### 支持检查的数据类型
  ```javascript
  [
    "null",
    "undefined",
    "string",
    "number",
    "boolean",
    "array",
    "object",
  ]
  ```
### 小程序使用场景
  - 页面入参 onLoad
  - 页面间通信接口 wx.navigateTo({ events });
  - 小程序入参 onLaunch / onShow

## API
```javascript
function entryCheck(
  [
    [
      key,        // 参数名
      type,       // 参数类型
      required,   // 是否必须
    ],
    // ...
  ],
  {},             // 页面入参对象
) {
  // return Promise<[Error || null, result[] || null]>;
}
```

## Example
```javascript
  // 入参数据
  const entryData = {
    id: 12,
    from: 'share',
  };
  // 入参检查配置
  const checkConfig = [
    ['id', 'number', true],
    ['from', 'number'],
  ];
  const [err, logResult] = await entryCheck(checkConfig, entryData);
  // 异常处理
  if (err) {
    const defaultStyle = chalk.inverse.bold;
    console.log(defaultStyle.redBright('终止信息：'), err.message);
    console.log(defaultStyle.blueBright('上报错误结果：'), JSON.stringify(logResult, null, 2));
    console.log(defaultStyle.yellowBright('检查配置：'), JSON.stringify(checkConfig, null, 2));
    return;
  }
  console.log('入参检查通过');

  // 终止信息： from 类型不匹配
  // 上报错误结果： {
  //   "from": [
  //     false,
  //     "share",
  //     "from 类型不匹配"
  //   ]
  // }
  // 检查配置： [
  //   [
  //     "id",
  //     "number",
  //     true
  //   ],
  //   [
  //     "from",
  //     "number"
  //   ]
  // ]
```

## License

ISC