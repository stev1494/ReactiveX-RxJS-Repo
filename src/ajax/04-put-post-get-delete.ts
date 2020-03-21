import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';


// ajax.get(url, {
//     id:1,
//     nombre:'Fernando'
// }, {
//     'mi-token':'ABC123'
// }).subscribe(console.log);


//Otra forma de configurar

ajax({
    url,
    method: 'GET',
    headers:{
        'mi-token':'ABC123'
    },
    body:{
        id:1,
        nombre:'Steven'
    }
}).subscribe(console.log);