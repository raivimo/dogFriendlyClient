import { FormControl } from "@angular/forms";
import { Pageable, Sort } from "./shared-interface";

export interface TipousuarioResponse {
    content:          ITipoPaseo[];
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

export interface ITipoPaseo {
    id:              number;
    nombre:          string;
    duracion:        number;
}

export interface ITipoPaseoForm {
    id:          FormControl<number>;
    nombre:      FormControl<string>;
    duracion:    FormControl<number>;
}

export interface ITipoPaseoSend {
    id:          number;
    nombre:      string;
    duracion:    number;
    
}