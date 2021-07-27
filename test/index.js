const chalk = require('chalk');

// const entryCheck = require('../src/index.js');
// const entryCheck = require('../dist/main.bundle.js').default;
// import entryCheck from '../dist/main.bundle.js';
const entryCheck = require('../dist/main.bundle.js');

// console.log('entryCheck =>', entryCheck);
console.log('\n');

(async function() {
  const entryData = {
    id: 12,
    from: 'share',
  };
  const checkConfig = [
    ['id', 'number', true],
    ['from', 'number'],
  ];
  const [err, logResult] = await entryCheck(checkConfig, entryData);
  if (err) {
    const defaultStyle = chalk.inverse.bold;
    console.log(defaultStyle.redBright('终止信息：'), err.message);
    console.log(defaultStyle.blueBright('上报错误结果：'), JSON.stringify(logResult, null, 2));
    console.log(defaultStyle.yellowBright('检查配置：'), JSON.stringify(checkConfig, null, 2));
    return;
  }
  console.log('入参检查通过');
})();