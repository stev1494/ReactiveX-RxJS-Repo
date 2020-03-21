import { of, from} from 'rxjs';

//of : Toma argumentos y genera una secuencia 
//From: Crea un observable de casi cualquier cosa

const observer = {
    next: val => console.log('Next:', val),
    complete: ()=> console.log('Complete')
}


const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;

}

const miIterable = miGenerador();

// for( let id of miIterable){
//     console.log(id)
// }

from(miIterable).subscribe(observer);


// const source$ = from([1,2,3,4,5]);
const source$ = from( fetch('https://api.github.com/users/klerith'));



// source$.subscribe(observer);
source$.subscribe( async (resp)=>{
    // console.log(resp.url);

    const dataResp = await resp.json;
    console.log(dataResp);
});
