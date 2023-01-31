import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoRemoveAdminRoutedComponent } from './paseo-remove-admin-routed.component';

describe('PaseoRemoveAdminRoutedComponent', () => {
  let component: PaseoRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<PaseoRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
