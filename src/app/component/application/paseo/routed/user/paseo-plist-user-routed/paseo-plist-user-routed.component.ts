import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPaseo } from 'src/app/model/paseo-interface';
import { PaseoService } from 'src/app/service/paseo.service';
import { IPage } from 'src/app/model/generic-types-interface';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-paseo-plist-user-routed',
  templateUrl: './paseo-plist-user-routed.component.html',
  styleUrls: ['./paseo-plist-user-routed.component.css']
})
export class PaseoPlistUserRoutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();
  @Input() id_UsuarioFilter: number;

  id:number = 1;

  oPaseo: IPaseo;
  responseFromServer: IPage<IPaseo>;

  numberOfElements: number = 5;
  pageSize: number = 5;
  page: number = 0;

  constructor(
    private oPaseoService: PaseoService,
  ) { this.responseFromServer = {} as IPage<IPaseo> }

  ngOnChanges() {
    if(this.id_UsuarioFilter != 0 ){
    this.getPaseosDuenyosMascotas();
    }
  }

  ngOnInit() {
  }

  getPaseosDuenyosMascotas() {
    this.oPaseoService.getPaseosDuenyosMascotas(this.page, this.numberOfElements, this.id_UsuarioFilter).subscribe({
      next: (data: IPage<IPaseo> ) => {
        this.responseFromServer = data;
        if(this.page > data.totalPages -1 ) {
          this.page = data.totalPages -1;
          this.getPaseosDuenyosMascotas();
        }
        console.log(this.responseFromServer.content);
        console.log(this.id_UsuarioFilter);
      }
      
    })
  }




















}
