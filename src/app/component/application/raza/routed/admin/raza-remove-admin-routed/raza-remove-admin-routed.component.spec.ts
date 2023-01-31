import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaRemoveAdminRoutedComponent } from './raza-remove-admin-routed.component';

describe('RazaRemoveAdminRoutedComponent', () => {
  let component: RazaRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<RazaRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazaRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
