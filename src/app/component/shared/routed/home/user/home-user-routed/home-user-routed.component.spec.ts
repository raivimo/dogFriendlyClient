import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserRoutedComponent } from './home-user-routed.component';

describe('HomeUserRoutedComponent', () => {
  let component: HomeUserRoutedComponent;
  let fixture: ComponentFixture<HomeUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
