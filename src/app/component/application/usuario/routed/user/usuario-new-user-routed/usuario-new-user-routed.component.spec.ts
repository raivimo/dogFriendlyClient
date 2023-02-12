import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNewUserRoutedComponent } from './usuario-new-user-routed.component';

describe('UsuarioNewUserRoutedComponent', () => {
  let component: UsuarioNewUserRoutedComponent;
  let fixture: ComponentFixture<UsuarioNewUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioNewUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioNewUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
