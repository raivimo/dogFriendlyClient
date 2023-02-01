import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoFinderAdminUnroutedComponent } from './paseo-finder-admin-unrouted.component';

describe('PaseoFinderAdminUnroutedComponent', () => {
  let component: PaseoFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<PaseoFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
