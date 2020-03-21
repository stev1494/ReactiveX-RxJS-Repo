import { fromEvent } from 'rxjs';
import { take, first, tap } from 'rxjs/operators';


const observer = {
    next: val => console.log('Next:', val),
    complete: ()=> console.log('Completado')
}

const click$ = fromEvent<MouseEvent>( document, 'click');




//Unicamente sucede el primer evento que cumpla con la condicion
click$.pipe(
    tap(()=>console.log),
    first<MouseEvent>( event => event.clientY >= 150)
)
.subscribe(observer);