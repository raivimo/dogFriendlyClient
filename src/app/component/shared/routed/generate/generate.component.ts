import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interface';
import { CountService } from 'src/app/service/count.service';
import { GenerateService } from 'src/app/service/generate.service';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  oUserSession: IUsuario;
  nUsuarios: number = 0;
  nTiposDeUsuario: number = 0;
  strResult: string = "";
  bLoading:boolean=false;

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
    this.bLoading=true;
   /*  this.oCountService.getCountProductos().subscribe((n: number) => this.nProductos = n);
    this.oCountService.getCountCarritos().subscribe((n: number) => this.nCarritos = n);
    this.oCountService.getCountCompras().subscribe((n: number) => this.nCompras = n);
    this.oCountService.getCountFacturas().subscribe((n: number) => this.nFacturas = n); */
    /* this.oCountService.getCountTiposProducto().subscribe((n: number) => this.nTiposProducto = n); */
    this.oCountService.getCountUsuarios().subscribe((n: number) => this.nUsuarios = n);
    this.oCountService.getCountTiposUsuario().subscribe((n: number) => this.nTiposDeUsuario = n);
    this.bLoading=false;
  }

  generateUsuarios(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateUsuarios(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " usuarios";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }


  generateTiposDeUsuario() {
    this.bLoading=true;
    this.oGenerateService.generateTiposDeUsuario().subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " tipos de producto";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }

eventsModalSubject: Subject<string> = new Subject<string>();

openModal() {
  this.eventsModalSubject.next("hola");
}

onCloseModal() {
  this.getCount();
  this.strResult = "";
}

}
