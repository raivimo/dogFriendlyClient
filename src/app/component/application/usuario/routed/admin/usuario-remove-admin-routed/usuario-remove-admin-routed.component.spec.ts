import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRemoveAdminRoutedComponent } from './usuario-remove-admin-routed.component';

describe('UsuarioRemoveAdminRoutedComponent', () => {
  let component: UsuarioRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<UsuarioRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
