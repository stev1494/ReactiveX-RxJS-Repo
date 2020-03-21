import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';


const numeros$ = of(1,1,1,3,3,4,4,5,6,1);

numeros$.pipe(
    distinct()
)
.subscribe(console.log);

interface Personaje {
    nombre:string
}


const personajes: Personaje[]=[
    {
        nombre:'Megaman'
    },
    {
        nombre:'Zero'
    },
    {
        nombre:'Megaman'
    },
    {
        nombre:'X'
    },
    {
        nombre:'Dr. M'
    },
    {
        nombre:'Zero'
    },
]


from(personajes).pipe(
    distinct(p=>p.nombre)
)
.subscribe(console.log);