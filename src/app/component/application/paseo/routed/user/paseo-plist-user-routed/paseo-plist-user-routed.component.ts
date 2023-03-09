import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IPaseo } from 'src/app/model/paseo-interface';
import { PaseoService } from 'src/app/service/paseo.service';
import { IPage } from 'src/app/model/generic-types-interface';

declare let bootstrap: any;

@Component({
  selector: 'app-paseo-plist-user-routed',
  templateUrl: './paseo-plist-user-routed.component.html',
  styleUrls: ['./paseo-plist-user-routed.component.css']
})
export class PaseoPlistUserRoutedComponent implements OnChanges {

  @Output() closeEvent = new EventEmitter<number>();
  @Input() id_UsuarioFilter: number;

  id_paseo: number = 0;

  oPaseo: IPaseo;
  responseFromServer: any;

  numberOfElements: number = 4;
  pageSize: number = 14;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    private oPaseoService: PaseoService,
  ) { this.responseFromServer = {} as IPaseo }

  ngOnChanges() {
    if(this.id_UsuarioFilter != 0 ){
      this.oPaseoService.paseoObservable.subscribe({
        next: (data ) => {
          this.getPaseosDuenyosMascotas();
        }
      })
    this.getPaseosDuenyosMascotas();
    }
  }


/*   getPaseosDuenyosMascotas() {
    this.oPaseoService.getPaseosDuenyosMascotas(this.page, this.numberOfElements, this.id_UsuarioFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (data: IPage<IPaseo> ) => {
        this.responseFromServer = data;
        }
      })
  } */

  
  getPaseosDuenyosMascotas() {
    this.oPaseoService.getPaseosDuenyosMascotas(this.id_UsuarioFilter)
    .subscribe({
      next: (data: any ) => {
        this.responseFromServer = data;
        }
      })
  }

  openModalViewPaseo(id_paseo: number): void {
    this.closeEvent.emit(id_paseo);
    this.id_paseo = id_paseo;
    this.myModal = new bootstrap.Modal(document.getElementById("viewPaseo"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeViewPaseoModal(): void {
    this.myModal.hide();
  }


















}
