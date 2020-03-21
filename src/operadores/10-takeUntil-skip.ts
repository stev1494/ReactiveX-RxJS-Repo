import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );


const counter$ = interval(1000);


const clickBtn$ = fromEvent( boton, 'click').pipe(
    tap(()=>console.log('Antes del Skip')),
    skip(1),
    tap(()=>console.log('Después del Skip')),

)

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe(
    {
        next: val => console.log('Next:', val),
        complete: ()=> console.log('Completado')
    }
);