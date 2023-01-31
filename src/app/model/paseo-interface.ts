import { Pageable, Sort } from "./shared-interface";
import { IPerro } from './perro-interface';
import { IUsuario } from "./usuario-interface";
import { FormControl } from "@angular/forms";
import { IEntity } from './generic-types-interface';
import { ITipoPaseo } from "./tipopaseo-interface";

export interface PaseoResponse {
    content:          IPaseo[];
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

export interface IPaseo {
    id:              number;
    fecha:           string;
    lugar:           string;
    precio:          number;
    tipopaseo:       ITipoPaseo;
    usuario:         IUsuario;
    perro:           IPerro;
}

export interface IPaseoForm {
    id:              FormControl<number>;
    fecha:           FormControl<string>;
    lugar:           FormControl<string>;
    precio:          FormControl<number>;
    id_tipopaseo:    FormControl<number>;
    id_usuario:      FormControl<number>;
    id_perro:        FormControl<number>;
}

export interface IPaseoSend {
    id:              number;
    fecha:           string;
    lugar:           string;
    precio:          number;
    tipopaseo:       IEntity;
    usuario:         IEntity;
    perro:           IEntity;
}