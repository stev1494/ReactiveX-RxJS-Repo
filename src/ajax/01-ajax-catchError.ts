import { ajax} from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';


const manejaErrores = (response:Response )=>{
    if( !response.ok){
        throw new Error( response.statusText);
    }
    return response;
}

const fetchPromesa = fetch(url);

// fetchPromesa
//    .then( resp => resp.json() )
//    .then( data=> console.log('Data:',data) )
//    .catch(err => console.warn('Error en usuarios',err) )

// fetchPromesa
//    .then( manejaErrores )
//    .then( resp => resp.json() )
//    .then( data=> console.log('Data:',data) )
//    .catch( err => console.warn('Error en usuarios',err) )


ajax(url).pipe(
    pluck('response'),
    catchError( err => {
        console.warn('Error en:', err);
        return of([]);
    })
)
.subscribe(users=> console.log('Usuarios:',users));