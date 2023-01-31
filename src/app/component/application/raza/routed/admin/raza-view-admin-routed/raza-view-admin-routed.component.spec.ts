import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaViewAdminRoutedComponent } from './raza-view-admin-routed.component';

describe('RazaViewAdminRoutedComponent', () => {
  let component: RazaViewAdminRoutedComponent;
  let fixture: ComponentFixture<RazaViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazaViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
