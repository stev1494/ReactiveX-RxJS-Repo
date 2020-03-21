import { Observable, Observer } from 'rxjs';


// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]:', value),
    error: error => console.warn('Error [obs]:', error),
    complete: () => console.info('Completado [obs]')
}

const obs$ = new Observable<string>( subs =>{

    subs.next('Hola');
    subs.next('Mundo');


    //Forzar un error
    // const a = undefined;
    // a.nombre = 'Fernando';

    subs.complete();


});



// obs$.subscribe(
//     valor => console.log('Next:', valor),
//     err => console.warn('error', err),
//     () => console.info('Completado')

// );


obs$.subscribe(observer);


