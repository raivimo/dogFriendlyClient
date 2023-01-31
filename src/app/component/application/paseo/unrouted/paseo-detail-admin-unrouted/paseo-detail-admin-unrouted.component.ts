import { Component, Input, OnInit } from '@angular/core';
import { IPage } from '../../../../../model/generic-types-interface';
import { IPaseo } from 'src/app/model/paseo-interface';
import { PaseoService } from '../../../../../service/paseo.service';

@Component({
  selector: 'app-paseo-detail-admin-unrouted',
  templateUrl: './paseo-detail-admin-unrouted.component.html',
  styleUrls: ['./paseo-detail-admin-unrouted.component.css']
})
export class PaseoDetailAdminUnroutedComponent implements OnInit {

  
  @Input() id: number;
  oPaseo: IPaseo;


  constructor(
    private oPaseoService : PaseoService
  ) { }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oPaseoService.getOne(this.id).subscribe({
      next: (data: IPaseo) => {
        this.oPaseo = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }



}
