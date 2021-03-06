// Ejercicio que propone evitar que la app se rompa debido a excesivas interacciones entre el buttom o el enter con el usuario, mediante el uso de ExhaustMap/MergeMap

import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

//Helper
const peticionHttpLogin = ( userPass)=>  
    ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
        pluck( 'response'),
        catchError( err => of('X'))
    )



//Creando un formulario

const form = document.createElement('form');
const inputEmail =  document.createElement('input');
const inputPass =  document.createElement('input');
const submitBtn =  document.createElement('button');

//Configuraciones
inputEmail.type ='email';
inputEmail.placeholder ='Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type ='password';
inputPass.placeholder ='Password';
inputPass.value = 'cityslicka';

form.append( inputEmail, inputPass, submitBtn);

document.querySelector('body').append( form);


//Streams
const submitForm$ = fromEvent<Event>(form,'submit');

submitForm$.pipe(
    tap( ev=> ev.preventDefault()),
    map( ev=>({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    exhaustMap( peticionHttpLogin )
)
.subscribe( token=>{
    console.log(token)
});
