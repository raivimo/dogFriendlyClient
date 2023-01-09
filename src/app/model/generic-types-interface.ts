import { HttpErrorResponse } from '@angular/common/http';
import { Pageable, Sort } from './shared-interface';

export interface IEntity {
    id: number;
}

export interface IPage<T> {
    content: T[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: Sort;
    empty: boolean;
}


export interface Sort2 {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface IDate {
    year: number,
    month: number,
    day: number
}

export interface ITime {
    hour: number,
    minute: number
}

export interface IFecha {
    date: IDate,
    time: ITime
}





export interface IReport {
    codigo: string,
    nombre: string,
    fechas: boolean,
    usuario: boolean,
    producto: boolean
}

export interface IPrint {
    cantidad: number;
    fechainicial:string;
    fechafinal:string;
}

export interface IOrder {
    sortField: string;
    sortDirection: string;
}

export interface IResult {
    id: number;    
    strOperation: string;
    strEntity: string;
    error: HttpErrorResponse;
}
