import { of } from 'rxjs';

//Nos permite trabajar de manera sincrona usando observables
// const obs$ = of(1,2,3,4,5,6,7);
const obs$ = of(...[1,2,3,4,5,6,7]);

console.log('Inicio del Obs$');

obs$.subscribe( next => 
    console.log('Next', next),
    null,
    () => console.log('Terminamos la secuencia')
  
);

console.log('Fin del Obs$');