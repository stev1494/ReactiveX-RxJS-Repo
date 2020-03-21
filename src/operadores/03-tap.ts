import { range } from 'rxjs';
import { tap, map} from 'rxjs/operators';

const numero$ = range(1,5);


numero$.pipe(
    tap( 
        x => {
            console.log('antes',x);
            return 100;
        }
    ),
    map( val=> val * 10),
    tap({
        next: valor => console.log('Despues', valor),
        complete: ()=> console.log('Se termina todo')
    })
).subscribe( val => console.log('Subs', val));