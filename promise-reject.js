// The second promise will result in the following warning/error:
//     (node:30820) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated
//     either by throwing inside of an async function without a catch block, or by rejecting a promise
//     which was not handled with .catch(). (rejection id: 1)
//     (node:30820) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future,
//     promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
let promise1 = new Promise(resolve => setTimeout(() => resolve(), 1000)).then(() => console.log('done first promise!'));
let promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Oops!'), 2000))
.then(() => console.log('done second promise!'), () => console.log('second promise rejected'))
.catch(x => console.log(x)).then((x) => console.log('success after catch'), (y) => console.log('fail after catch'));
