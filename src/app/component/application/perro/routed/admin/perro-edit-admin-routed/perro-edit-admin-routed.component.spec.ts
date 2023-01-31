import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroEditAdminRoutedComponent } from './perro-edit-admin-routed.component';

describe('PerroEditAdminRoutedComponent', () => {
  let component: PerroEditAdminRoutedComponent;
  let fixture: ComponentFixture<PerroEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
