import { Component, Input, OnInit } from '@angular/core';
import { IPerro } from 'src/app/model/perro-interface';
import { PerroService } from 'src/app/service/perro.service';

@Component({
  selector: 'app-perro-view-user-routed',
  templateUrl: './perro-view-user-routed.component.html',
  styleUrls: ['./perro-view-user-routed.component.css']
})
export class PerroViewUserRoutedComponent implements OnInit {

  @Input() id: number;
  oPerro: IPerro = null;

  constructor(
    private oPerroService: PerroService
  ) { this.oPerro = {} as IPerro }


  ngOnInit() {
    this.oPerroService.perroObervable.subscribe({
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
      this.oPerroService.getOne(this.id).subscribe({
        next: (data: IPerro) => {
          this.oPerro = data;
        }
      })
    }
  }


  changeID(ev) {
    this.id = ev.target.value;
  }

}
