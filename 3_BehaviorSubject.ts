import {BehaviorSubject, Subject} from "rxjs";

// Set initial value to 0
let subject: Subject<any> = new BehaviorSubject<any>(0);

subject.subscribe(next => {
    console.log('1=' + next);
});

subject.subscribe(next => {
    console.log('2=' + next);
});

subject.next(1);
