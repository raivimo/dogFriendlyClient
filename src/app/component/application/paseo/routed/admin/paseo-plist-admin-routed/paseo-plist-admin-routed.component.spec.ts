import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoPlistAdminRoutedComponent } from './paseo-plist-admin-routed.component';

describe('PaseoPlistAdminRoutedComponent', () => {
  let component: PaseoPlistAdminRoutedComponent;
  let fixture: ComponentFixture<PaseoPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
