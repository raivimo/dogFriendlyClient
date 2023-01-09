import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { PaginationComponent } from './component/shared/unrouted/pagination/pagination.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    //Usuario
    UsuarioEditAdminRoutedComponent,
    UsuarioPlistAdminRoutedComponent,
    UsuarioRemoveAdminRoutedComponent,
    UsuarioViewAdminRoutedComponent,
    UsuarioNewAdminRoutedComponent,
    UsuarioDetailAdminUnroutedComponent,
    //Tipousuario
    TipousuarioPlistAdminRoutedComponent,

    //
    FooterComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    TipousuarioFinderAdminUnroutedComponent,
    PaginationUnroutedComponent,
    GenerateComponent,
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
    PaginationService,
    CountService,
    GenerateService,
    MetadataService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
