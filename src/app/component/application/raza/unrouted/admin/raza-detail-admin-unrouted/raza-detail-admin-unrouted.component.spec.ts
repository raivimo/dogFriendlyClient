import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaDetailAdminUnroutedComponent } from './raza-detail-admin-unrouted.component';

describe('RazaDetailAdminUnroutedComponent', () => {
  let component: RazaDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<RazaDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazaDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
