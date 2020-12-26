import {concat, forkJoin, from, interval, merge, of, zip} from "rxjs";
import {map, take} from "rxjs/operators";

const from1 = interval(1000).pipe(map(i => 'from1_' + i), take(3));
const from2 = interval(1000).pipe(map(i => 'from2_' + i),take(2));

// Flattens multiple Observables together by blending their values into one Observable.
const resultMerge = merge(from1, from2);
resultMerge.subscribe(x => console.log('Merge = ' + x));

// Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.
const resultConcat = concat(from1, from2);
resultConcat.subscribe(x => console.log('Concat = ' + x));

let age$ = of(27, 25, 29, 31);
let name$ = of('Foo', 'Bar', 'Beer');
let isDev$ = of(true, true, false);
const resultZip = zip(age$, name$, isDev$);
resultZip.subscribe(([age, name, isDev]) => console.log('Zip = ' + age + '-' + name + '-' + isDev));

// Wait for Observables to complete and then combine last values they emitted.
const resultForkJoin = forkJoin([from1, from2]);
resultForkJoin.subscribe(x => console.log('ForkJoin = ' + x));
