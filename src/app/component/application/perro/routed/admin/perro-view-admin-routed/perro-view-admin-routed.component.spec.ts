import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroViewAdminRoutedComponent } from './perro-view-admin-routed.component';

describe('PerroViewAdminRoutedComponent', () => {
  let component: PerroViewAdminRoutedComponent;
  let fixture: ComponentFixture<PerroViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
