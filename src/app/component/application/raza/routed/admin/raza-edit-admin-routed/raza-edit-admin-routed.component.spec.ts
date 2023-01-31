import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaEditAdminRoutedComponent } from './raza-edit-admin-routed.component';

describe('RazaEditAdminRoutedComponent', () => {
  let component: RazaEditAdminRoutedComponent;
  let fixture: ComponentFixture<RazaEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazaEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
