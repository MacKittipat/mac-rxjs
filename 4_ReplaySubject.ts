import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

// Set reply buffer to 2
let subject: Subject<any> = new ReplaySubject<any>(2);

subject.subscribe(next => {
    console.log('1=' + next);
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);

subject.subscribe(next => {
    console.log('2=' + next);
});
