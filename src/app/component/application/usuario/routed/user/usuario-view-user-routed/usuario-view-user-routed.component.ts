import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interface';
import { Events, UsuarioService } from '../../../../../../service/usuario.service';
import { faDiagramNext } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-usuario-view-user-routed',
  templateUrl: './usuario-view-user-routed.component.html',
  styleUrls: ['./usuario-view-user-routed.component.css']
})
export class UsuarioViewUserRoutedComponent implements OnInit {

  @Input() oUsuario: IUsuario;

  constructor(private oUsuarioService: UsuarioService) { }

    ngOnInit() {  
      this.oUsuarioService.usuarioObservale.subscribe({
        next: (data) => {
          this.oUsuarioService.getOne(data).subscribe({
            next: (data2) => {
              this.oUsuario = data2;

            }
          })
        }
      })  
      
      
      }
      


 







}
