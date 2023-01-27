
import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";
import { ITipoUsuario } from "./tipousuario-response-interface";




export interface IUsuario {
    id:            number;
    nombre:        string;
    apellido1:     string;
    apellido2:     string;
    email:         string;
    login:         string;
    fechaNacimiento: string;
    tipousuario:   ITipoUsuario;
}

export interface IUsuario2Form {
    id:          FormControl<number>;
    nombre:      FormControl<string>;
    apellido1:   FormControl<string>;
    apellido2:   FormControl<string>;
    email:       FormControl<string>;
    fechaNacimiento: FormControl<string>;
    login:       FormControl<string>;
    id_tipousuario:  FormControl<number>;
}
export interface IUsuario2Send {
    id:          number;
    nombre:      string;
    apellido1:   string;
    apellido2:   string;
    email:       string;
    fechaNacimiento: string;
    login:       string;
    tipousuario: IEntity;
}