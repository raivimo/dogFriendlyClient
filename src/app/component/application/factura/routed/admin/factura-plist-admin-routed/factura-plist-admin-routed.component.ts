import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IFactura } from '../../../../../../model/factura-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FacturaService } from '../../../../../../service/factura.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-factura-plist-admin-routed',
  templateUrl: './factura-plist-admin-routed.component.html',
  styleUrls: ['./factura-plist-admin-routed.component.css']
})
export class FacturaPlistAdminRoutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IFactura>;

  strTermFilter: string = "";
  id_paseoFilter: number = 0;
  numberOfElements: number = 5;
  pageSize: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  //
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    private oFacturaService: FacturaService
  ) { this.responseFromServer = {} as IPage<IFactura>;}

  ngOnInit() {
    this.getPage();
  }


  getPage() {
    this.oFacturaService.getFacturasPlist(this.page, this.numberOfElements, this.strTermFilter, this.id_paseoFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IFactura>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
            this.getPage();
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.page = 0;
    this.getPage();

  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByPaseo(id: number): void {
    this.id_paseoFilter = id;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }



}
