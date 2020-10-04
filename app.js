const { of, from, Observable } = require('rxjs');
const { map, filter, scan } = require('rxjs/operators');

let observable = new Observable(subscriber => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
})
observable.subscribe(i => {
    console.log(i)
})
console.log('----------')

observableOf = of(1, 2, 3)
observableOf.pipe(
    map(i => i * 5),
    scan((acc, curr) => acc + curr, 0)
).subscribe(i => {
    console.log(i)
})
console.log('----------')

observableFrom = of(1, 2, 3)
observableFrom
.pipe(
    map(i => i * 5),
    filter(i => i % 2 == 0)
)
.subscribe({
    next: (i) => {
        console.log(i)
    },
    error: (err) => {
        console.error('something wrong occurred: ' + err);
    },
    complete: () => {
        console.log('done');
    }
})
console.log('----------')

