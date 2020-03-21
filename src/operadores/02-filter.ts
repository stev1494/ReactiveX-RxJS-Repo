import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/Operators';


// range(1,10).pipe(
//     filter ( val => val%2 ==1)
// ).subscribe(console.log)



// range(1,10).pipe(
//     filter ( (val, i) =>{
//         console.log('Index', i);
//         return val % 2 ===1 
//     })
// ).subscribe(console.log)




//Ejercicio
// Unicamente filtrar a los personajes que son heroes

interface Personaje{
    tipo: String,
    nombre: String
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]


const obs$ = from( personajes);

obs$.pipe(
    filter( p=>{
        return p.tipo === 'heroe'
    })
).subscribe(console.log);


const keyup$ =  fromEvent<KeyboardEvent>(document, 'keyup')
            .pipe(
                map( event => event.code),// Recibe un keyBoard y sale un string
                filter( key=> key === 'Enter')
            );

keyup$.subscribe(console.log)