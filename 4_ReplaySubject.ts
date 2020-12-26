import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

// Set reply buffer to 2
let subject: Subject<any> = new ReplaySubject<any>(2);

subject.subscribe(next => {
    console.log('A=' + next);
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);

subject.subscribe(next => {
    console.log('B=' + next);
});

/*
Output :
A=1
A=2
A=3
A=4
A=5
B=4
B=5
*/

