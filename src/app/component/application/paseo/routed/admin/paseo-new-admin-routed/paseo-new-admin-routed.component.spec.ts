import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoNewAdminRoutedComponent } from './paseo-new-admin-routed.component';

describe('PaseoNewAdminRoutedComponent', () => {
  let component: PaseoNewAdminRoutedComponent;
  let fixture: ComponentFixture<PaseoNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
