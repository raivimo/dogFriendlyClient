import { FormControl } from "@angular/forms";
import { IEntity } from './generic-types-interface';
import { Pageable, Sort } from "./shared-interface";
import { IUsuario } from "./usuario-interface";
import { IRaza } from "./raza-interface";


export interface PerroResponse {
    content:          IPerro[];
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



export interface IPerro {
    id:         number;
    nombre:     string;
    fechaNacimiento: string;
    genero:     number;
    imagen:     string;
    peso:       number;
    sociable:   boolean;
    puedeIrSuelto: boolean;
    esJugueton: boolean;
    raza:       IRaza;
    usuario:    IUsuario;
}

export interface IPerroForm {
    id:         FormControl<number>;
    nombre:     FormControl<string>;
    fechaNacimiento:  FormControl<string>;
    genero:     FormControl<number>;
    imagen:     FormControl<string>;
    peso:       FormControl<number>;
    sociable:   FormControl<boolean>;
    puedeIrSuelto: FormControl<boolean>;
    esJugueton: FormControl<boolean>;
    id_raza:    FormControl<number>;
    id_usuario: FormControl<number>;
}

export interface IPerroSend {
    id:         number;
    nombre:     string;
    fechaNacimiento: string;
    genero:     number;
    imagen:     string;
    peso:       number;
    sociable:   boolean;
    puedeIrSuelto: boolean;
    esJugueton: boolean;
    raza:       IEntity;
    usuario:    IEntity;
}

