import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';



const url = 'https://httpsssbin.org/delay/1';

const manejaError = (resp:AjaxError)=>{
    console.warn('Error', resp.message);
    return of([{
        ok:false,
        usuarios:[]
    }]);
}


const obs$ = ajax.getJSON(url ).pipe(
    catchError(manejaError)
);

const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);

obs$.subscribe( data => console.log('Data', data));
obs2$.subscribe( data => console.log('Ajax', data));

