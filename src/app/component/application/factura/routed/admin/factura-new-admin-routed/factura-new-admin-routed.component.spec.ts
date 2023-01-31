import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaNewAdminRoutedComponent } from './factura-new-admin-routed.component';

describe('FacturaNewAdminRoutedComponent', () => {
  let component: FacturaNewAdminRoutedComponent;
  let fixture: ComponentFixture<FacturaNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
