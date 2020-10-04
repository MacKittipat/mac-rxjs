import {Observable, Observer} from "rxjs";

const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.complete();
})
observable.subscribe((n) => {
    console.log(`next : ${n}`)
}, (e) => {
    console.error(e);
}, () => {
    console.log('complete : Completed');
}).unsubscribe();

const observer: Observer<any> = {
    next: (n) => {
        console.log(`next2 : ${n}`)
    },
    error: (e) => {
        console.error(e);
    },
    complete: () => {
        console.log('complete2 : Completed');
    }
}
const subscription = observable.subscribe(observer);
subscription.unsubscribe();
