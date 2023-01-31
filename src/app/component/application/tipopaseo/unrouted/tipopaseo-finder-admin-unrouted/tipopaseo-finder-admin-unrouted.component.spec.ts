import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopaseoFinderAdminUnroutedComponent } from './tipopaseo-finder-admin-unrouted.component';

describe('TipopaseoFinderAdminUnroutedComponent', () => {
  let component: TipopaseoFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<TipopaseoFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopaseoFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipopaseoFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
