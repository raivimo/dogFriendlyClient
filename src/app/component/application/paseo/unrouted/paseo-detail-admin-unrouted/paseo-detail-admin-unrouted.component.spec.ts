import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoDetailAdminUnroutedComponent } from './paseo-detail-admin-unrouted.component';

describe('PaseoDetailAdminUnroutedComponent', () => {
  let component: PaseoDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<PaseoDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
