import { Component, Input, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/model/usuario-interface';

@Component({
  selector: 'app-usuario-view-user-routed',
  templateUrl: './usuario-view-user-routed.component.html',
  styleUrls: ['./usuario-view-user-routed.component.css']
})
export class UsuarioViewUserRoutedComponent implements OnInit {

  @Input() oUsuario: IUsuario;

  constructor() { }

  ngOnInit(): void {
  }

}
