#!/usr/bin/env node

const entryCheck = require('../src/index.js');

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