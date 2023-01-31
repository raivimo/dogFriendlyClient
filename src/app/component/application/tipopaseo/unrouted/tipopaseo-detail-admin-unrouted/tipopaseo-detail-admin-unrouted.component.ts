import { Component, Input, OnInit } from '@angular/core';
import { ITipoPaseo } from '../../../../../model/tipopaseo-interface';
import { TipopaseoService } from '../../../../../service/tipopaseo.service';

@Component({
  selector: 'app-tipopaseo-detail-admin-unrouted',
  templateUrl: './tipopaseo-detail-admin-unrouted.component.html',
  styleUrls: ['./tipopaseo-detail-admin-unrouted.component.css']
})
export class TipopaseoDetailAdminUnroutedComponent implements OnInit {

  @Input() id:number;
  oTipoPaseo: ITipoPaseo;

  constructor(
    private oTipoPaseoService: TipopaseoService
  ) { }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oTipoPaseoService.getOne(this.id).subscribe({
      next: (data: ITipoPaseo) => {
        this.oTipoPaseo = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }


}
