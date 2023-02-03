import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interface';
import { CountService } from 'src/app/service/count.service';
import { GenerateService } from 'src/app/service/generate.service';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  oUserSession: IUsuario;
  nUsuarios: number = 0;
  nTiposDeUsuario: number = 0;
  nPerros: number = 0;
  nRazas: number = 0;
  nPaseos: number = 0;
  nFacturas: number = 0;
  nTiposPaseo: number = 0;



  strResult: string = "";
  bLoading: boolean = false;

  constructor(
    public oMetadataService: MetadataService,
    public oGenerateService: GenerateService,
    public oCountService: CountService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    protected oLocation: Location,
  ) {
    /*  if (this.oRoute.snapshot.data) {
       this.oUserSession = this.oRoute.snapshot.data.message;
       localStorage.setItem("usuario", JSON.stringify(this.oRoute.snapshot.data.message));
     } else {
       localStorage.clear();
       oRouter.navigate(['/home']);
     } */


  }

  ngOnInit(): void {
    this.getCount();
  }


  getCount(): void {
    this.bLoading = true;
    this.oCountService.getCountPerros().subscribe((n: number) => this.nPerros = n);
    this.oCountService.getCountRazas().subscribe((n: number) => this.nRazas = n);
    this.oCountService.getCountPaseos().subscribe((n: number) => this.nPaseos = n);
    this.oCountService.getCountFacturas().subscribe((n: number) => this.nFacturas = n);
    this.oCountService.getCountTiposPaseo().subscribe((n: number) => this.nTiposPaseo = n);
    this.oCountService.getCountUsuarios().subscribe((n: number) => this.nUsuarios = n);
    this.oCountService.getCountTiposUsuario().subscribe((n: number) => this.nTiposDeUsuario = n);
    this.bLoading = false;
  }

  generatePerros(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generatePerros(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " Perros";
        this.bLoading = false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      })
  }

  generateRazas(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generateRazas(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " Razas";
        this.bLoading = false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      })
  }

  generatePaseos(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generatePaseos(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " Paseos";
        this.bLoading = false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      })
  }

  generateFacturas(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generateFacturas(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " Facturas";
        this.bLoading = false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      })
  }

  generateTiposPaseo(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generateTiposPaseo(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " Tipos de Paseo";
        this.bLoading = false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      })
  }

  generateUsuarios(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generateUsuarios(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " usuarios";
        this.bLoading = false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      })
  }


  generateTiposDeUsuario(n:number):void {
    this.bLoading = true;
    this.oGenerateService.generateTiposDeUsuario(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " tipos de producto";
        this.bLoading = false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      })
  }

  eventsModalSubject: Subject<string> = new Subject<string>();

  openModal() {
    this.eventsModalSubject.next("hola"); //REVISAR
    this.getCount();
  }

  onCloseModal() {
    this.getCount();
    this.strResult = "";
  }

}
