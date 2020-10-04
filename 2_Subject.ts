import {Subject} from "rxjs";

let subject: Subject<any> = new Subject<any>();

subject.subscribe(next => {
    console.log('1=' + next);
});

subject.subscribe(next => {
    console.log('2=' + next);
});

subject.next(Math.random());
subject.next(Math.random());

subject.subscribe(next => {
    console.log('3=' + next);
});


