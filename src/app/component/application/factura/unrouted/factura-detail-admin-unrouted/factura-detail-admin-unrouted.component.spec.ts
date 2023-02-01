import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaDetailAdminUnroutedComponent } from './factura-detail-admin-unrouted.component';

describe('FacturaDetailAdminUnroutedComponent', () => {
  let component: FacturaDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<FacturaDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
