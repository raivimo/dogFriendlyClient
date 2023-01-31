import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaEditAdminRoutedComponent } from './factura-edit-admin-routed.component';

describe('FacturaEditAdminRoutedComponent', () => {
  let component: FacturaEditAdminRoutedComponent;
  let fixture: ComponentFixture<FacturaEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
