import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoViewAdminRoutedComponent } from './paseo-view-admin-routed.component';

describe('PaseoViewAdminRoutedComponent', () => {
  let component: PaseoViewAdminRoutedComponent;
  let fixture: ComponentFixture<PaseoViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
