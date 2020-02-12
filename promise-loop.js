// Does the arrow function copy `i` by value or by reference?
for (var i = 0; i < 10; i++) {
    let promise = new Promise(resolve => setTimeout(() => resolve(i), 1000 * i));
    promise.then(value => console.log(value));
}
