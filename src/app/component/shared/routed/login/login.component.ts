import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/session-interface';
import { DecodeService } from 'src/app/service/decode.service';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  
  username: string = ""
  oFormularioLogin: FormGroup<IUser>;

  constructor(
    protected oRouter: Router,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
  ) {
    this.oFormularioLogin = <FormGroup>this.oFormBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

  }

  ngOnInit() {
  }

  login() {
    const user = this.oFormularioLogin.get('login')!.value
    const password = this.oFormularioLogin.get('password')!.value

    this.oSessionService.login(user, password).subscribe(
      {
        next: (data: string) => {
          localStorage.setItem("token", data);
          this.oSessionService.emit(new EmitEvent(Events.login, data));
          this.oRouter.navigate(['/home'])
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status, error.statusText);
        }
      }
    )
    this.oSessionService.login(this.oFormularioLogin.get('login')!.value, this.oFormularioLogin.get('password')!.value)
      .subscribe({
        next: (data: string) => {
          localStorage.setItem("token", data);
          this.oSessionService.emit(new EmitEvent(Events.login, data));
          this.oRouter.navigate(['/home']);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status, error.statusText);
        }
      })
  }

  loginAsAdmin() {
    console.log("loginAsAdmin");
    this.oFormularioLogin.controls.login.setValue("admin");
    this.oFormularioLogin.controls.password.setValue("andamio");
  }

}
