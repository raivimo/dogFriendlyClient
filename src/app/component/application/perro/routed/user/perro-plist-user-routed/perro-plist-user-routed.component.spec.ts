import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroPlistUserRoutedComponent } from './perro-plist-user-routed.component';

describe('PerroPlistUserRoutedComponent', () => {
  let component: PerroPlistUserRoutedComponent;
  let fixture: ComponentFixture<PerroPlistUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroPlistUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroPlistUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
