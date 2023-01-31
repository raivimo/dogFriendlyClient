import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoEditAdminRoutedComponent } from './paseo-edit-admin-routed.component';

describe('PaseoEditAdminRoutedComponent', () => {
  let component: PaseoEditAdminRoutedComponent;
  let fixture: ComponentFixture<PaseoEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
