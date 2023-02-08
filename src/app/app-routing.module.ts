import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { TipousuarioEditAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-admin-routed/tipousuario-edit-admin-routed.component';
import { TipousuarioNewAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-new-admin-routed/tipousuario-new-admin-routed.component';
import { TipousuarioRemoveAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-remove-admin-routed/tipousuario-remove-admin-routed.component';
import { TipousuarioViewAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-admin-routed/tipousuario-view-admin-routed.component';
import { PerroEditAdminRoutedComponent } from './component/application/perro/routed/admin/perro-edit-admin-routed/perro-edit-admin-routed.component';
import { PerroNewAdminRoutedComponent } from './component/application/perro/routed/admin/perro-new-admin-routed/perro-new-admin-routed.component';
import { PerroPlistAdminRoutedComponent } from './component/application/perro/routed/admin/perro-plist-admin-routed/perro-plist-admin-routed.component';
import { PerroRemoveAdminRoutedComponent } from './component/application/perro/routed/admin/perro-remove-admin-routed/perro-remove-admin-routed.component';
import { PerroViewAdminRoutedComponent } from './component/application/perro/routed/admin/perro-view-admin-routed/perro-view-admin-routed.component';
import { RazaEditAdminRoutedComponent } from './component/application/raza/routed/admin/raza-edit-admin-routed/raza-edit-admin-routed.component';
import { RazaNewAdminRoutedComponent } from './component/application/raza/routed/admin/raza-new-admin-routed/raza-new-admin-routed.component';
import { RazaPlistAdminRoutedComponent } from './component/application/raza/routed/admin/raza-plist-admin-routed/raza-plist-admin-routed.component';
import { RazaRemoveAdminRoutedComponent } from './component/application/raza/routed/admin/raza-remove-admin-routed/raza-remove-admin-routed.component';
import { RazaViewAdminRoutedComponent } from './component/application/raza/routed/admin/raza-view-admin-routed/raza-view-admin-routed.component';
import { PaseoEditAdminRoutedComponent } from './component/application/paseo/routed/admin/paseo-edit-admin-routed/paseo-edit-admin-routed.component';
import { PaseoNewAdminRoutedComponent } from './component/application/paseo/routed/admin/paseo-new-admin-routed/paseo-new-admin-routed.component';
import { PaseoPlistAdminRoutedComponent } from './component/application/paseo/routed/admin/paseo-plist-admin-routed/paseo-plist-admin-routed.component';
import { PaseoRemoveAdminRoutedComponent } from './component/application/paseo/routed/admin/paseo-remove-admin-routed/paseo-remove-admin-routed.component';
import { PaseoViewAdminRoutedComponent } from './component/application/paseo/routed/admin/paseo-view-admin-routed/paseo-view-admin-routed.component';
import { TipopaseoEditAdminRoutedComponent } from './component/application/tipopaseo/routed/admin/tipopaseo-edit-admin-routed/tipopaseo-edit-admin-routed.component';
import { TipopaseoNewAdminRoutedComponent } from './component/application/tipopaseo/routed/admin/tipopaseo-new-admin-routed/tipopaseo-new-admin-routed.component';
import { TipopaseoPlistAdminRoutedComponent } from './component/application/tipopaseo/routed/admin/tipopaseo-plist-admin-routed/tipopaseo-plist-admin-routed.component';
import { TipopaseoRemoveAdminRoutedComponent } from './component/application/tipopaseo/routed/admin/tipopaseo-remove-admin-routed/tipopaseo-remove-admin-routed.component';
import { TipopaseoViewAdminRoutedComponent } from './component/application/tipopaseo/routed/admin/tipopaseo-view-admin-routed/tipopaseo-view-admin-routed.component';
import { FacturaEditAdminRoutedComponent } from './component/application/factura/routed/admin/factura-edit-admin-routed/factura-edit-admin-routed.component';
import { FacturaNewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-new-admin-routed/factura-new-admin-routed.component';
import { FacturaPlistAdminRoutedComponent } from './component/application/factura/routed/admin/factura-plist-admin-routed/factura-plist-admin-routed.component';
import { FacturaRemoveAdminRoutedComponent } from './component/application/factura/routed/admin/factura-remove-admin-routed/factura-remove-admin-routed.component';
import { FacturaViewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-view-admin-routed/factura-view-admin-routed.component';
import { HomeGuessRoutedComponent } from './component/shared/routed/home/guess/home-guess-routed/home-guess-routed.component';
/* import { SessionResolver } from './resolve/session.resolve'; */
import { HomeAdminRoutedComponent } from './component/shared/routed/home/admin/home-admin-routed/home-admin-routed.component';
import { HomeUserRoutedComponent } from './component/shared/routed/home/user/home-user-routed/home-user-routed.component';


const routes: Routes = [
  { path: '', component: HomeGuessRoutedComponent },
  { path: 'home', component: HomeGuessRoutedComponent },
  { path: 'home/admin', component: HomeAdminRoutedComponent },
  { path: 'home/user', component: HomeUserRoutedComponent },


  { path: 'login', component: LoginComponent },  
  { path: 'logout', component: LogoutComponent },  
  { path: 'admin/random/load', component: GenerateComponent},
  //Usuario
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminRoutedComponent },
  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent },
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent},
  { path: 'admin/usuario/new', component: UsuarioNewAdminRoutedComponent},
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent},
 
  
  //TipoUsuario
  { path: 'admin/tipousuario/plist', component: TipousuarioPlistAdminRoutedComponent },
  { path: 'admin/tipousuario/view/:id', component: TipousuarioViewAdminRoutedComponent },
  { path: 'admin/tipousuario/remove/:id', component: TipousuarioRemoveAdminRoutedComponent},
  { path: 'admin/tipousuario/new', component: TipousuarioNewAdminRoutedComponent},
  { path: 'admin/tipousuario/edit/:id', component:TipousuarioEditAdminRoutedComponent},
  //Perro
  { path: 'admin/perro/plist', component: PerroPlistAdminRoutedComponent },
  { path: 'admin/perro/view/:id', component: PerroViewAdminRoutedComponent },
  { path: 'admin/perro/remove/:id', component: PerroRemoveAdminRoutedComponent},
  { path: 'admin/perro/new', component: PerroNewAdminRoutedComponent},
  { path: 'admin/perro/edit/:id', component:PerroEditAdminRoutedComponent},
/*   { path: 'admin/perro/plist/usuario/:id', component: PerroPlistAdminRoutedComponent}, */
  
  //Raza
  { path: 'admin/raza/plist', component: RazaPlistAdminRoutedComponent },
  { path: 'admin/raza/view/:id', component: RazaViewAdminRoutedComponent },
  { path: 'admin/raza/remove/:id', component: RazaRemoveAdminRoutedComponent},
  { path: 'admin/raza/new', component: RazaNewAdminRoutedComponent},
  { path: 'admin/raza/edit/:id', component:RazaEditAdminRoutedComponent},
  //Paseo
  { path: 'admin/paseo/plist', component: PaseoPlistAdminRoutedComponent },
  { path: 'admin/paseo/view/:id', component: PaseoViewAdminRoutedComponent },
  { path: 'admin/paseo/remove/:id', component: PaseoRemoveAdminRoutedComponent},
  { path: 'admin/paseo/new', component: PaseoNewAdminRoutedComponent},
  { path: 'admin/paseo/edit/:id', component:PaseoEditAdminRoutedComponent},
  //TipoPaseo
  { path: 'admin/tipopaseo/plist', component: TipopaseoPlistAdminRoutedComponent },
  { path: 'admin/tipopaseo/view/:id', component: TipopaseoViewAdminRoutedComponent },
  { path: 'admin/tipopaseo/remove/:id', component: TipopaseoRemoveAdminRoutedComponent},
  { path: 'admin/tipopaseo/new', component: TipopaseoNewAdminRoutedComponent},
  { path: 'admin/tipopaseo/edit/:id', component:TipopaseoEditAdminRoutedComponent},
  //Factura
  { path: 'admin/factura/plist', component: FacturaPlistAdminRoutedComponent },
  { path: 'admin/factura/view/:id', component: FacturaViewAdminRoutedComponent },
  { path: 'admin/factura/remove/:id', component: FacturaRemoveAdminRoutedComponent},
  { path: 'admin/factura/new', component: FacturaNewAdminRoutedComponent},
  { path: 'admin/factura/edit/:id', component:FacturaEditAdminRoutedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
