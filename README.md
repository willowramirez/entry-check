# entry-check

> 小程序页面入参检查



[![NPM](https://nodei.co/npm/entry-check.png)](https://nodei.co/npm/entry-check/)

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

[TOC]

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
+ 小程序使用场景
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
  // return Promise<[Error || null, boolean]>;
}
```

## License

ISC