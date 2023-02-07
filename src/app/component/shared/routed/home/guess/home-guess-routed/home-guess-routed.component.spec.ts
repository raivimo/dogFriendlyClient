import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGuessRoutedComponent } from './home-guess-routed.component';

describe('HomeGuessRoutedComponent', () => {
  let component: HomeGuessRoutedComponent;
  let fixture: ComponentFixture<HomeGuessRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGuessRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGuessRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
