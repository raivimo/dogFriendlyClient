import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoViewUserRoutedComponent } from './paseo-view-user-routed.component';

describe('PaseoViewUserRoutedComponent', () => {
  let component: PaseoViewUserRoutedComponent;
  let fixture: ComponentFixture<PaseoViewUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoViewUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoViewUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
