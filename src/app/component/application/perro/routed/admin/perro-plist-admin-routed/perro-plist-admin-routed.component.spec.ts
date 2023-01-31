import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroPlistAdminRoutedComponent } from './perro-plist-admin-routed.component';

describe('PerroPlistAdminRoutedComponent', () => {
  let component: PerroPlistAdminRoutedComponent;
  let fixture: ComponentFixture<PerroPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
