import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminRoutedComponent } from './home-admin-routed.component';

describe('HomeAdminRoutedComponent', () => {
  let component: HomeAdminRoutedComponent;
  let fixture: ComponentFixture<HomeAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
