import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutphoto'
})
export class WithoutphotoPipe implements PipeTransform {

  transform(value: any[]): string {

    let urlnomimage = "assets/img/noimage.png";
    if (!value) {
        return urlnomimage;
    }

    return (value.length > 0) ? value[1].url : urlnomimage ;


  }

}
