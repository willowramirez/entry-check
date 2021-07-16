
// const entryCheck = require('../src/index.js');
// const entryCheck = require('../dist/main.bundle.js');
import entryCheck from '../dist/main.bundle.js';

console.log('entryCheck', entryCheck);
(async function() {
  const entryData = {
    id: 12,
    from: 'share',
  };
  const [err, result] = await entryCheck([
    ['id', 'number', true],
    ['from', 'string', true],
  ], entryData);
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('||| result |||', result);
})();