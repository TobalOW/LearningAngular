import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitaliza'
})
export class CapitalizaPipe implements PipeTransform {
  transform(value: string, args: any[]): string {




    return "Hola Mundo";
  }
}
