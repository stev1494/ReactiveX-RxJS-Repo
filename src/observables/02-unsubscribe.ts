import { Observable, Observer, Subscriber } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]:', value),
    error: error => console.warn('Error [obs]:', error),
    complete: () => console.info('Completado [obs]')
}


const intervalo$ = new Observable( subscriber =>{

    //Crear un contador
    let count = 0;


    setInterval(  ()=>{
        //cada segundo
        count ++;
        subscriber.next(count);

        if(count == 9) {
            subscriber.complete()
        }
    },2500);

});


const subs = intervalo$.subscribe( num => console.log('Num:', num));

setTimeout( ()=>{
    subs.unsubscribe()
},9000)
