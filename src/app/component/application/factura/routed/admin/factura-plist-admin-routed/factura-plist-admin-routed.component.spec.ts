import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPlistAdminRoutedComponent } from './factura-plist-admin-routed.component';

describe('FacturaPlistAdminRoutedComponent', () => {
  let component: FacturaPlistAdminRoutedComponent;
  let fixture: ComponentFixture<FacturaPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
