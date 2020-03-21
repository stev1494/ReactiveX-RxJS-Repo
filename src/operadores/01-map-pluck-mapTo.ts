import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';


//Una forma de hacerlo
range(1,5).subscribe( val => console.log(val*10))


//Usando Map
//Puedo establecer de que tipo quiero la salida.

range(1,5).pipe(
        map<number, string>( val => (val * 10).toString() )
    )
    .subscribe( console.log );


//Otro ejemplo//
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');


const keyupCode$ = keyup$.pipe(
    map( event => event.code)
)


//El pluck nos ayuda a extrar objetos de objetos.
// Se lo puede ver como un objeto.metodo
const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);

//Ejemplo con mapTo
const keyupMapTo$ = keyup$.pipe(
    
    //Puede regresar cualquier cosa
    mapTo('Tecla presionada')
);

keyupCode$.subscribe( resp => console.log('Map:', resp));
keyupPluck$.subscribe( resp => console.log('Pluck:', resp));
keyupMapTo$.subscribe( resp => console.log('MapTo:', resp));



//Utilidad del mapTo
//Ejemplo
// imaginate que un posteo HTTP se ejecute correctamente pero la respuesta cambió eventualmente en el backend, y esto está rompiendo tu código en el front-end, entonces usas el mapTo, emites la respuesta que necesitas y resuelves el problema con un simple operador.