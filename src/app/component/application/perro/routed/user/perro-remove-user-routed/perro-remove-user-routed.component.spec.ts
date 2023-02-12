import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroRemoveUserRoutedComponent } from './perro-remove-user-routed.component';

describe('PerroRemoveUserRoutedComponent', () => {
  let component: PerroRemoveUserRoutedComponent;
  let fixture: ComponentFixture<PerroRemoveUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroRemoveUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroRemoveUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
