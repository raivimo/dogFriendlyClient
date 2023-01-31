import { Component, Input, OnInit } from '@angular/core';
import { IPerro } from '../../../../../model/perro-interface';
import { PerroService } from '../../../../../service/perro.service';

@Component({
  selector: 'app-perro-detail-admin-unrouted',
  templateUrl: './perro-detail-admin-unrouted.component.html',
  styleUrls: ['./perro-detail-admin-unrouted.component.css']
})
export class PerroDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oPerro: IPerro;

  constructor(
    private oPerroService: PerroService
  ) { }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oPerroService.getOne(this.id).subscribe({
      next: (data: IPerro) => {
        this.oPerro = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }





}
