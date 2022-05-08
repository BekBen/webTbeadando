import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salyatpipe'
  
})
export class SalyatpipePipe implements PipeTransform {
 
  transform(value: string): any {
    let vl = value ;
    let seged = vl.split('');
    vl=''
    for(let b in seged){
      vl+=' '
      vl+=seged[b]
    }
    return  vl ;
  }

}
