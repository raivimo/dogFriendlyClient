import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../../../../../service/factura.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
declare let bootstrap: any;

@Component({
  selector: 'app-factura-remove-admin-routed',
  templateUrl: './factura-remove-admin-routed.component.html',
  styleUrls: ['./factura-remove-admin-routed.component.css']
})
export class FacturaRemoveAdminRoutedComponent implements OnInit {
  
  id: number = 0;
  msg: string = "";


  constructor(    
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oFacturaService: FacturaService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
     }

  ngOnInit(): void {
  }

  removeOne() {
    this.oFacturaService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Factura " + this.id + " eliminada";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }


}
