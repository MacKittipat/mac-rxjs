import {of, from, interval, range, defer} from "rxjs";
import {take} from "rxjs/operators";

// Converts almost anything to an Observable.
const resultFrom = from([10, 20, 30]);
resultFrom.subscribe(x => console.log('From = ' + x));

// Converts the arguments to an observable sequence.
const resultOf = of(10, 20, 30);
resultOf.subscribe(x => console.log('Of = ' + x));

// Creates an Observable that emits a sequence of numbers within a specified range.
const resultRange = range(1, 3);
resultRange.subscribe(x => console.log('Range = ' + x));

// Creates the Observable lazily, that is, only when it is subscribed.
const resultDefer = defer(() => {
    // Capture date time at the moment of subscription
    // New random number is generate at the moment of subscription
    return of(new Date(), Math.random());
});
resultDefer.subscribe(x => console.log('Defer1 = ' + x));
resultDefer.subscribe(x => console.log('Defer2 = ' + x));
