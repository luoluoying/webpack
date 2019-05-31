import { plus } from './utils/math'
// 同步
console.log('hello world')
console.log('1 + 2: ', plus(1, 2))

// 异步

// console.log('hello webpack')
// window.setTimeout(() => {
//   import('./utils/math').then(mathUtil => {
//     console.log('1 + 2: ', mathUtil.plus(1, 2))
//   })
// }, 2000)