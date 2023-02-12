import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { IPerro } from 'src/app/model/perro-interface';

@Component({
  selector: 'app-perro-plist-user-routed',
  templateUrl: './perro-plist-user-routed.component.html',
  styleUrls: ['./perro-plist-user-routed.component.css']
})
export class PerroPlistUserRoutedComponent implements OnInit {
  
  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IPerro>;


  id_UsuarioFilter: number = 0;
  id_RazaFilter: number = 0;

  numberOfElements: number = 5;
  pageSize: number = 5;
  page: number = 0;

  constructor() { }

  ngOnInit(): void {
  }




}
