import { FormControl } from '@angular/forms';
import { IPaseo } from './paseo-interface';
import { Pageable, Sort } from './shared-interface';
import { IEntity } from './generic-types-interface';

export interface FacturaResponse {
    content:          IFactura[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    numberOfElements: number;
    sort:             Sort;
    number:           number;
    first:            boolean;
    size:             number;
    empty:            boolean;
}

export class IFactura {
    id:          number;
    fecha:       string;
    iva:         number;
    pagado:      boolean;
    paseo:       IPaseo;
}

export class IFacturaForm {
    id:         FormControl<number>;
    fecha:      FormControl<string>;
    iva:        FormControl<number>;
    pagado:     FormControl<boolean>;  
    id_paseo:   FormControl<number>;
}

export class IFacturaSend {
    id:          number;
    fecha:       string;
    iva:         number;
    pagado:      boolean;
    paseo:       IEntity;
}
