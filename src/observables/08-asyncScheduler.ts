import { asyncScheduler } from 'rxjs';


const saludar = ()=> console.log('Hola Mundo');
const despedida = nombre => console.log(`Chao ${nombre}`);

// asyncScheduler.schedule( despedida, 2000, 'Steven' );


const subs = asyncScheduler.schedule( function(state){

    console.log('State', state);

    this.schedule( state+1 , 1000);

}, 3000 , 0 );


//Lo mismo podemos hacer con un setTimeOut
asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000);

// setTimeout( ()=>{
//     subs.unsubscribe();
// },9000);