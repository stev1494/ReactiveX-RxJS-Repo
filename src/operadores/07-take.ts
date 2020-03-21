import { range } from 'rxjs';
import { take } from 'rxjs/operators';


const observer = {
    next: nx => console.log(nx),
    complete: () => console.log('Completo')
}


range(1,5).pipe(
    take(3)
)
.subscribe(observer);