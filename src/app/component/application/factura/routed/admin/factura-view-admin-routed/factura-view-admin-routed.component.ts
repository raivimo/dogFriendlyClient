import { Component, OnInit } from '@angular/core';
import { IFactura } from '../../../../../../model/factura-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factura-view-admin-routed',
  templateUrl: './factura-view-admin-routed.component.html',
  styleUrls: ['./factura-view-admin-routed.component.css']
})
export class FacturaViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oFactura: IFactura = null;


  constructor(
    private oActivatedRouted: ActivatedRoute
  ) {
    this.id = oActivatedRouted.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

}
