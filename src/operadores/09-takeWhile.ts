import { fromEvent } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document,'click');


click$.pipe(
    map( ({x,y})=>({x,y}) ),
    takeWhile( ( { y } )=> y<= 150)

)
.subscribe(
{
    next: val => console.log('Next:', val),
    complete: ()=> console.log('Completado')
}
);