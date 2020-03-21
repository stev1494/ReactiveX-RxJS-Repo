// Si tenemos los observables x y z, el concat hace que solo se emita la salida x , luego que se completa sigue y y así sucesivamente. Prácticamente encola los obs.

import { interval, concat , of } from 'rxjs';
import { take } from 'rxjs/operators';



const interval$ = interval(1000);

concat(
    interval$.pipe( take(3)),
    interval$.pipe( take(2)),
    of(3)
).subscribe( console.log )