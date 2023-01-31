import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaFinderAdminUnroutedComponent } from './raza-finder-admin-unrouted.component';

describe('RazaFinderAdminUnroutedComponent', () => {
  let component: RazaFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<RazaFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazaFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
