import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoNewUserRoutedComponent } from './paseo-new-user-routed.component';

describe('PaseoNewUserRoutedComponent', () => {
  let component: PaseoNewUserRoutedComponent;
  let fixture: ComponentFixture<PaseoNewUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoNewUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoNewUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
