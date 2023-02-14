import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseadorPlistUserRoutedComponent } from './paseador-plist-user-routed.component';

describe('PaseadorPlistUserRoutedComponent', () => {
  let component: PaseadorPlistUserRoutedComponent;
  let fixture: ComponentFixture<PaseadorPlistUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseadorPlistUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseadorPlistUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
