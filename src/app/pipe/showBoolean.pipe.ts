import { Pipe, PipeTransform } from '@angular/core';
import { IFecha } from '../../../../wildCartAngularClient2021/src/app/model/model-interfaces';

@Pipe({ name: 'showBoolean' })
export class showBooleanPipe implements PipeTransform {
    transform(value: boolean) {
        if (value) {
            return '<i class="fas fa-check"></i>';
        } else {
            return '<i class="fas fa-times"></i>';
        }
    }
}