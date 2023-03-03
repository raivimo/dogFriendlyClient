import { Component, Input, OnInit } from '@angular/core';
import { IPerro } from 'src/app/model/perro-interface';
import { PerroService } from 'src/app/service/perro.service';

@Component({
  selector: 'app-perro-remove-user-routed',
  templateUrl: './perro-remove-user-routed.component.html',
  styleUrls: ['./perro-remove-user-routed.component.css']
})
export class PerroRemoveUserRoutedComponent implements OnInit {

  @Input() id: number;
  oPerro: IPerro;

  constructor(
    private oPerroService: PerroService,
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
      console.log(this.id);
      this.oPerroService.getOne(this.id).subscribe({
        next: (data: IPerro) => {
          this.oPerro = data;
          console.log(data);
        }
      })
    }
  }

  removeOne() {
    this.oPerroService.removeOne(this.id).subscribe({
      next: (data: any) => {
        this.oPerroService.perroObervable.emit(data);
      }
    })
  }

}
