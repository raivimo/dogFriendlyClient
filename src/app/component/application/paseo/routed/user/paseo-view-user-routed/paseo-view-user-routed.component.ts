import { Component, Input, OnInit } from '@angular/core';
import { IPaseo } from 'src/app/model/paseo-interface';
import { PaseoService } from '../../../../../../service/paseo.service';
import { IPerro } from 'src/app/model/perro-interface';

@Component({
  selector: 'app-paseo-view-user-routed',
  templateUrl: './paseo-view-user-routed.component.html',
  styleUrls: ['./paseo-view-user-routed.component.css']
})
export class PaseoViewUserRoutedComponent implements OnInit {

  @Input() id: number;
  oPaseo: IPaseo = null;
  oPerro: IPerro = null;

  constructor(
    private oPaseoService: PaseoService
  ) { this.oPaseo = {} as IPaseo,
      this.oPerro = {} as IPerro }


  ngOnInit() {
    this.oPaseoService.paseoObservable.subscribe({
      next: (data) => {
        this.getOne();
      }
    })
  }

  ngOnChanges() {
    this.getOne();
  }

  getOne() {
    if (this.id != 0) {
      this.oPaseoService.getOne(this.id).subscribe({
        next: (data: IPaseo) => {
          this.oPaseo = data;
        }
      })
    }
  }


  changeID(ev) {
    this.id = ev.target.value;
  }

}
