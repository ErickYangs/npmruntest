const { initTest, initWord } = require('@ericyangchen/npmyangtest')

// let a = npmTestFn('121323');
// console.log('a', a);
// import * as initTest from '@ericyangchen/npmyangtest'
console.log('initTest', initTest)
console.log('initWord', initWord)
// import BigNumber from 'bignumber.js'
const BigNumber = require('bignumber.js')
let num = new BigNumber('0.12121').toFixed(2).toString()
console.log('num', num)
