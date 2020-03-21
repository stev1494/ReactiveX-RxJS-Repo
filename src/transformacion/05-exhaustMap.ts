// El exhaustMap solo mantiene una subscripción activa antes de poder añadir otra subscripción para que emita los valores.

//Utilidad ---> Prevenir el SPAM


import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';
//El concatMap encola los observables que se emiten

const interval$ =interval(500).pipe( take(3));
const click$ = fromEvent(document,'click');


click$.pipe(
    exhaustMap( ()=> interval$)
).subscribe(console.log);
