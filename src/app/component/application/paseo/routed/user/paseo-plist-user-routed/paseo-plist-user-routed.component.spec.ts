import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoPlistUserRoutedComponent } from './paseo-plist-user-routed.component';

describe('PaseoPlistUserRoutedComponent', () => {
  let component: PaseoPlistUserRoutedComponent;
  let fixture: ComponentFixture<PaseoPlistUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoPlistUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoPlistUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
