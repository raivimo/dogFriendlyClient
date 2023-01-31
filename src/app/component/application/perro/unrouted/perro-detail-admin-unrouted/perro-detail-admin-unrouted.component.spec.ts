import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroDetailAdminUnroutedComponent } from './perro-detail-admin-unrouted.component';

describe('PerroDetailAdminUnroutedComponent', () => {
  let component: PerroDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<PerroDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
