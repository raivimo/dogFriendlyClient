import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroViewUserRoutedComponent } from './perro-view-user-routed.component';

describe('PerroViewUserRoutedComponent', () => {
  let component: PerroViewUserRoutedComponent;
  let fixture: ComponentFixture<PerroViewUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroViewUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroViewUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
