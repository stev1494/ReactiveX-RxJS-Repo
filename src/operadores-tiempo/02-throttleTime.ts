import { fromEvent, asyncScheduler } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';


const click$ = fromEvent( document,'click');

// throttleTime : emite el valor y luego se espera el tiempo indicado
click$.pipe(
    throttleTime(3000)
);
// .subscribe(console.log);

//Una aplicación importante para el uso del throttleTime. Pueder ser tenemos la funcionalidad de suggestions y no que queremos que se dispare a cada momento un llamado http.Por ejemplo!


const input = document.createElement('input');
document.querySelector('body').append( input );


const input$ = fromEvent( input,'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler,{
        leading: true,
        trailing:true
    }),
    pluck('target','value'),
    distinctUntilChanged()
)
.subscribe(console.log)