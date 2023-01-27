import { FormControl } from "@angular/forms";
import { Pageable, Sort } from "./shared-interface";

export interface TipousuarioResponse {
    content:          ITipoUsuario[];
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

export interface ITipoUsuario {
    id:              number;
    nombre:          string;
}

export interface ITipoUsuarioForm {
    id:          FormControl<number>;
    nombre:      FormControl<string>;
}

export interface ITipoUsuarioSend {
    id:          number;
    nombre:      string;
    
}