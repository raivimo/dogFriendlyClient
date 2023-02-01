import { Component, Input, OnInit } from '@angular/core';
import { IFactura } from 'src/app/model/factura-interface';
import { FacturaService } from '../../../../../service/factura.service';

@Component({
  selector: 'app-factura-detail-admin-unrouted',
  templateUrl: './factura-detail-admin-unrouted.component.html',
  styleUrls: ['./factura-detail-admin-unrouted.component.css']
})
export class FacturaDetailAdminUnroutedComponent implements OnInit {

  
  @Input() id: number;
  oFactura: IFactura;

  constructor(
    private oFacturaService :FacturaService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oFacturaService.getOne(this.id).subscribe({
      next: (data: IFactura) => {
        this.oFactura = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}
