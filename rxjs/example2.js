const rxjs = require('rxjs');
const { Observable } = rxjs;

const observable = new Observable(subscriber => {
    // When calling `observable.subscribe` with an Observer, the function `subscribe`
    // in `new Observable(function subscribe(subscriber) {...})` is run for that
    // given subscriber. Each call to `observable.subscribe` triggers its own
    // independent setup for that given subscriber.
    // A `subscribe` call is simply a way to start an "Observable execution".
    console.log('inside subscribe');
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    const intervalId = setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);

    // Provide a way of canceling and disposing the interval resource.
    return function unsubscribe() {
        console.log('inside unsubscribe');
        clearInterval(intervalId);
    };
});

console.log('just before subscribe');
const subscription  = observable.subscribe({
    next(x) {
        console.log('got value ' + x);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    }
});
console.log('just after subscribe');

subscription .unsubscribe();
