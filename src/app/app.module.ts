import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PaginationService } from './service/pagination.service';
import { CryptoService } from './service/crypto.service';
import { DecodeService } from './service/decode.service';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted.component';
import { FooterComponent } from './component/shared/unrouted/footer/footer.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { TipousuarioFinderAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-finder-admin-unrouted/tipousuario-finder-admin-unrouted.component';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { CountService } from './service/count.service';
import { GenerateService } from './service/generate.service';
import { MetadataService } from './service/metadata.service';
import { TipousuarioEditAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-admin-routed/tipousuario-edit-admin-routed.component';
import { TipousuarioNewAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-new-admin-routed/tipousuario-new-admin-routed.component';
import { TipousuarioRemoveAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-remove-admin-routed/tipousuario-remove-admin-routed.component';
import { TipousuarioViewAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-admin-routed/tipousuario-view-admin-routed.component';
import { TipousuarioDetailAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-detail-admin-unrouted/tipousuario-detail-admin-unrouted.component';
import { PerroEditAdminRoutedComponent } from './component/application/perro/routed/admin/perro-edit-admin-routed/perro-edit-admin-routed.component';
import { PerroNewAdminRoutedComponent } from './component/application/perro/routed/admin/perro-new-admin-routed/perro-new-admin-routed.component';
import { PerroPlistAdminRoutedComponent } from './component/application/perro/routed/admin/perro-plist-admin-routed/perro-plist-admin-routed.component';
import { PerroRemoveAdminRoutedComponent } from './component/application/perro/routed/admin/perro-remove-admin-routed/perro-remove-admin-routed.component';
import { PerroViewAdminRoutedComponent } from './component/application/perro/routed/admin/perro-view-admin-routed/perro-view-admin-routed.component';
import { PerroDetailAdminUnroutedComponent } from './component/application/perro/unrouted/perro-detail-admin-unrouted/perro-detail-admin-unrouted.component';
import { PerroService } from './service/perro.service';
import { SessionService } from './service/session.service';
import { TipousuarioService } from './service/tipousuario.service';
import { UsuarioService } from './service/usuario.service';
import { RazaService } from './service/raza.service';
import { UsuarioFinderAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-finder-admin-unrouted/usuario-finder-admin-unrouted.component';
import { RazaEditAdminRoutedComponent } from './component/application/raza/routed/admin/raza-edit-admin-routed/raza-edit-admin-routed.component';
import { RazaNewAdminRoutedComponent } from './component/application/raza/routed/admin/raza-new-admin-routed/raza-new-admin-routed.component';
import { RazaPlistAdminRoutedComponent } from './component/application/raza/routed/admin/raza-plist-admin-routed/raza-plist-admin-routed.component';
import { RazaRemoveAdminRoutedComponent } from './component/application/raza/routed/admin/raza-remove-admin-routed/raza-remove-admin-routed.component';
import { RazaViewAdminRoutedComponent } from './component/application/raza/routed/admin/raza-view-admin-routed/raza-view-admin-routed.component';
import { RazaFinderAdminUnroutedComponent } from './component/application/raza/unrouted/admin/raza-finder-admin-unrouted/raza-finder-admin-unrouted.component';
import { RazaDetailAdminUnroutedComponent } from './component/application/raza/unrouted/admin/raza-detail-admin-unrouted/raza-detail-admin-unrouted.component';
import { PaseoEditAdminRoutedComponent } from './component/application/paseo/routed/admin/paseo-edit-admin-routed/paseo-edit-admin-routed.component';
import { PaseoNewAdminRoutedComponent } from './component/application/paseo/routed/admin/paseo-new-admin-routed/paseo-new-admin-routed.component';
import { PaseoPlistAdminRoutedComponent } from './component/application/paseo/routed/admin/paseo-plist-admin-routed/paseo-plist-admin-routed.component';
import { PaseoRemoveAdminRoutedComponent } from './component/application/paseo/routed/admin/paseo-remove-admin-routed/paseo-remove-admin-routed.component';
import { PaseoViewAdminRoutedComponent } from './component/application/paseo/routed/admin/paseo-view-admin-routed/paseo-view-admin-routed.component';
import { PaseoService } from './service/paseo.service';
import { PaseoDetailAdminUnroutedComponent } from './component/application/paseo/unrouted/paseo-detail-admin-unrouted/paseo-detail-admin-unrouted.component';
import { TipopaseoFinderAdminUnroutedComponent } from './component/application/tipopaseo/unrouted/tipopaseo-finder-admin-unrouted/tipopaseo-finder-admin-unrouted.component';
import { PerroFinderAdminUnroutedComponent } from './component/application/perro/unrouted/perro-finder-admin-unrouted/perro-finder-admin-unrouted.component';
import { TipopaseoEditAdminRoutedComponent } from './component/application/tipopaseo/routed/admin/tipopaseo-edit-admin-routed/tipopaseo-edit-admin-routed.component';
import { TipopaseoNewAdminRoutedComponent } from './component/application/tipopaseo/routed/admin/tipopaseo-new-admin-routed/tipopaseo-new-admin-routed.component';
import { TipopaseoPlistAdminRoutedComponent } from './component/application/tipopaseo/routed/admin/tipopaseo-plist-admin-routed/tipopaseo-plist-admin-routed.component';
import { TipopaseoRemoveAdminRoutedComponent } from './component/application/tipopaseo/routed/admin/tipopaseo-remove-admin-routed/tipopaseo-remove-admin-routed.component';
import { TipopaseoViewAdminRoutedComponent } from './component/application/tipopaseo/routed/admin/tipopaseo-view-admin-routed/tipopaseo-view-admin-routed.component';
import { TipopaseoService } from './service/tipopaseo.service';
import { TipopaseoDetailAdminUnroutedComponent } from './component/application/tipopaseo/unrouted/tipopaseo-detail-admin-unrouted/tipopaseo-detail-admin-unrouted.component';
import { FacturaEditAdminRoutedComponent } from './component/application/factura/routed/admin/factura-edit-admin-routed/factura-edit-admin-routed.component';
import { FacturaNewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-new-admin-routed/factura-new-admin-routed.component';
import { FacturaPlistAdminRoutedComponent } from './component/application/factura/routed/admin/factura-plist-admin-routed/factura-plist-admin-routed.component';
import { FacturaViewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-view-admin-routed/factura-view-admin-routed.component';
import { FacturaRemoveAdminRoutedComponent } from './component/application/factura/routed/admin/factura-remove-admin-routed/factura-remove-admin-routed.component';
import { FacturaService } from './service/factura.service';
import { FacturaDetailAdminUnroutedComponent } from './component/application/factura/unrouted/factura-detail-admin-unrouted/factura-detail-admin-unrouted.component';
import { PaseoFinderAdminUnroutedComponent } from './component/application/paseo/unrouted/paseo-finder-admin-unrouted/paseo-finder-admin-unrouted.component';
import { HttpOptionsService } from './service/httpoptions.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HomeAdminRoutedComponent } from './component/shared/routed/home/admin/home-admin-routed/home-admin-routed.component';
import { HomeUserRoutedComponent } from './component/shared/routed/home/user/home-user-routed/home-user-routed.component';
import { HomeGuessRoutedComponent } from './component/shared/routed/home/guess/home-guess-routed/home-guess-routed.component';
import { UsuarioEditUserRoutedComponent } from './component/application/usuario/routed/user/usuario-edit-user-routed/usuario-edit-user-routed.component';
import { UsuarioNewUserRoutedComponent } from './component/application/usuario/routed/user/usuario-new-user-routed/usuario-new-user-routed.component';
import { UsuarioViewUserRoutedComponent } from './component/application/usuario/routed/user/usuario-view-user-routed/usuario-view-user-routed.component';
import { PerroViewUserRoutedComponent } from './component/application/perro/routed/user/perro-view-user-routed/perro-view-user-routed.component';
import { PerroRemoveUserRoutedComponent } from './component/application/perro/routed/user/perro-remove-user-routed/perro-remove-user-routed.component';
import { PerroEditUserRoutedComponent } from './component/application/perro/routed/user/perro-edit-user-routed/perro-edit-user-routed.component';
import { PerroPlistUserRoutedComponent } from './component/application/perro/routed/user/perro-plist-user-routed/perro-plist-user-routed.component';
import { PaseoEditUserAdminComponent } from './component/application/paseo/routed/user/paseo-edit-user-admin/paseo-edit-user-admin.component';
import { PaseoNewUserRoutedComponent } from './component/application/paseo/routed/user/paseo-new-user-routed/paseo-new-user-routed.component';
import { PaseoPlistUserRoutedComponent } from './component/application/paseo/routed/user/paseo-plist-user-routed/paseo-plist-user-routed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeAdminRoutedComponent,
    HomeUserRoutedComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    //Usuario
    UsuarioEditAdminRoutedComponent,
    UsuarioPlistAdminRoutedComponent,
    UsuarioRemoveAdminRoutedComponent,
    UsuarioViewAdminRoutedComponent,
    UsuarioNewAdminRoutedComponent,
    //Unrouted
    UsuarioFinderAdminUnroutedComponent,
    UsuarioDetailAdminUnroutedComponent,

    //Tipousuario
    TipousuarioPlistAdminRoutedComponent,
    TipousuarioEditAdminRoutedComponent,
    TipousuarioNewAdminRoutedComponent,
    TipousuarioRemoveAdminRoutedComponent,
    TipousuarioViewAdminRoutedComponent,
    //Unrouted
    TipousuarioFinderAdminUnroutedComponent,
    TipousuarioDetailAdminUnroutedComponent,

    //Perro
    PerroEditAdminRoutedComponent,
    PerroNewAdminRoutedComponent,
    PerroPlistAdminRoutedComponent,
    PerroRemoveAdminRoutedComponent,
    PerroViewAdminRoutedComponent,
    //Unrouted
    PerroDetailAdminUnroutedComponent,
    PerroFinderAdminUnroutedComponent,

    //Raza
    RazaEditAdminRoutedComponent,
    RazaNewAdminRoutedComponent,
    RazaPlistAdminRoutedComponent,
    RazaRemoveAdminRoutedComponent,
    RazaViewAdminRoutedComponent,
    //Unrouted
    RazaFinderAdminUnroutedComponent,
    RazaDetailAdminUnroutedComponent,

    //Paseo
    PaseoEditAdminRoutedComponent,
    PaseoNewAdminRoutedComponent,
    PaseoPlistAdminRoutedComponent,
    PaseoRemoveAdminRoutedComponent,
    PaseoViewAdminRoutedComponent,
    //Unrouted
    PaseoDetailAdminUnroutedComponent,

    //TipoPaseo
    TipopaseoEditAdminRoutedComponent,
    TipopaseoNewAdminRoutedComponent,
    TipopaseoPlistAdminRoutedComponent,
    TipopaseoRemoveAdminRoutedComponent,
    TipopaseoViewAdminRoutedComponent,
    //Unrouted
    TipopaseoFinderAdminUnroutedComponent,
    TipopaseoDetailAdminUnroutedComponent,

    //Factura
    FacturaEditAdminRoutedComponent,
    FacturaNewAdminRoutedComponent,
    FacturaPlistAdminRoutedComponent,
    FacturaViewAdminRoutedComponent,
    FacturaRemoveAdminRoutedComponent,
    //Unrouted

    //Shared
    PaginationUnroutedComponent,
    GenerateComponent,
    FooterComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    FacturaDetailAdminUnroutedComponent,
    PaseoFinderAdminUnroutedComponent,

    HomeAdminRoutedComponent,
    HomeUserRoutedComponent,
    UsuarioEditUserRoutedComponent,
    UsuarioNewUserRoutedComponent,
    UsuarioViewUserRoutedComponent,
    PerroViewUserRoutedComponent,
    PerroRemoveUserRoutedComponent,
    PerroEditUserRoutedComponent,
    PerroPlistUserRoutedComponent,
    PaseoEditUserAdminComponent,
    PaseoNewUserRoutedComponent,
    PaseoPlistUserRoutedComponent,
   /*  HomeGuessRoutedComponent, */

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    CryptoService,
    DecodeService,
    SessionService,
    HttpOptionsService,

    PaginationService,
    CountService,
    GenerateService,
    MetadataService,

    PerroService,
    TipousuarioService,
    UsuarioService,
    RazaService,
    PaseoService,
    TipopaseoService,
    FacturaService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
