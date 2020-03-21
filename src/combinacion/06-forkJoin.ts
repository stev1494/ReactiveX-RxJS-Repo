//Retorna un arreglo de los ultimos valores emitidos por cada observable, luego que todos terminen.
import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';




const numero$ = of(1,2,3);
const intervalo$ = interval(1000).pipe( take(3));
const letras$ = of('a','b','c').pipe( delay(3500));


forkJoin(
    numero$,
    intervalo$,
    letras$
).subscribe( console.log )