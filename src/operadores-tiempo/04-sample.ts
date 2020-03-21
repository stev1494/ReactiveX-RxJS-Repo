import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';
// Emite el último valor emitido por el observable, hasta que el otro observable que está dentro del operador SAMPLE emita un valor.


const interval$ = interval(500);
const click$ = fromEvent(document,'click');

interval$.pipe(
    sample(click$)
)
.subscribe(console.log);