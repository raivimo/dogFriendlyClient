import { Component, Input, OnInit } from '@angular/core';
import { IRaza } from '../../../../../../model/raza-interface';
import { RazaService } from '../../../../../../service/raza.service';

@Component({
  selector: 'app-raza-detail-admin-unrouted',
  templateUrl: './raza-detail-admin-unrouted.component.html',
  styleUrls: ['./raza-detail-admin-unrouted.component.css']
})
export class RazaDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oRaza: IRaza;

  constructor(
    private oRazaService: RazaService
  ) { }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oRazaService.getOne(this.id).subscribe({
      next: (data: IRaza) => {
        this.oRaza = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }


}
