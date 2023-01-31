import { Component, OnInit } from '@angular/core';
import { TipopaseoService } from '../../../../../../service/tipopaseo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
declare let bootstrap: any;

@Component({
  selector: 'app-tipopaseo-remove-admin-routed',
  templateUrl: './tipopaseo-remove-admin-routed.component.html',
  styleUrls: ['./tipopaseo-remove-admin-routed.component.css']
})
export class TipopaseoRemoveAdminRoutedComponent implements OnInit {
  
  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oTipoPaseoService : TipopaseoService
  ) { 
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  
  removeOne() {
    this.oTipoPaseoService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Tipo de Paseo " + this.id + " eliminado";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }

}
