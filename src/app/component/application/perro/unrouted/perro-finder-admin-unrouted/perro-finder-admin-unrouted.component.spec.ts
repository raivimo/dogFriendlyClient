import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroFinderAdminUnroutedComponent } from './perro-finder-admin-unrouted.component';

describe('PerroFinderAdminUnroutedComponent', () => {
  let component: PerroFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<PerroFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
