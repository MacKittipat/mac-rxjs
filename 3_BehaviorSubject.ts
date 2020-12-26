import {BehaviorSubject, Subject} from "rxjs";

// Set initial value to 0
let subject: Subject<any> = new BehaviorSubject<any>(0);

subject.subscribe(next => {
    console.log('A=' + next);
});

subject.subscribe(next => {
    console.log('B=' + next);
});

subject.next(1);

subject.subscribe(next => {
    console.log('C=' + next);
});

/*
Output :
A=0
B=0
A=1
B=1
C=1
*/
