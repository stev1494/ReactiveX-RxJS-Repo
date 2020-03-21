import { of, range, asyncScheduler } from 'rxjs';


//El asyncScheduler hace que se comporte de manera asincrona
const obs$ = range(1,5, asyncScheduler);



console.log('Inicio');

obs$.subscribe(console.log);

console.log('Fin');
