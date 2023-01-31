import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopaseoDetailAdminUnroutedComponent } from './tipopaseo-detail-admin-unrouted.component';

describe('TipopaseoDetailAdminUnroutedComponent', () => {
  let component: TipopaseoDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<TipopaseoDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopaseoDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipopaseoDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
