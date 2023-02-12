import { FormControl } from "@angular/forms";
import { Pageable, Sort } from "./shared-interface";

export interface RazaResponse {
    content:          IRaza[];
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

export interface IRaza{
    id:              number;
    nombre:          string;
    tamanyo:         string;
    perros:          number;
}

export interface IRazaForm{
    id:     FormControl<number>;
    nombre: FormControl<string>;
    tamanyo:FormControl<string>;
}

export interface IRazaSend{
    id:              number;
    nombre:          string;
    tamanyo:         string;
}
