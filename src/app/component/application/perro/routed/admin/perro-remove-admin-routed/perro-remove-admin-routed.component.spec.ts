import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroRemoveAdminRoutedComponent } from './perro-remove-admin-routed.component';

describe('PerroRemoveAdminRoutedComponent', () => {
  let component: PerroRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<PerroRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
