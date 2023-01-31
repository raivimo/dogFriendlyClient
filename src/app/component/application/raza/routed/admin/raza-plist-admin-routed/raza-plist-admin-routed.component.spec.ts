import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaPlistAdminRoutedComponent } from './raza-plist-admin-routed.component';

describe('RazaPlistAdminRoutedComponent', () => {
  let component: RazaPlistAdminRoutedComponent;
  let fixture: ComponentFixture<RazaPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazaPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
