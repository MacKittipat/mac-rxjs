import {Subject} from "rxjs";

let subject: Subject<any> = new Subject<any>();

subject.subscribe(next => {
    console.log('A=' + next);
});

subject.subscribe(next => {
    console.log('B=' + next);
});

subject.next(Math.random());
subject.next(Math.random());

subject.subscribe(next => {
    console.log('C=' + next);
});

/*
Output :
A=0.5204474975077267
B=0.5204474975077267
A=0.2618515230947669
B=0.2618515230947669
*/
