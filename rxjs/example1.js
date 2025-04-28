const rxjs = require('rxjs');
const rxjsOperators = require('rxjs/operators');
const { of } = rxjs;
const { map } = rxjsOperators;

of(1,2,3).pipe(map(x => x + '!!!')); // etc
rxjs.of(1, 2, 3);
