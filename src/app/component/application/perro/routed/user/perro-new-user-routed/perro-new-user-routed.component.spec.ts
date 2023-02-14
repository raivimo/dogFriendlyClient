import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroNewUserRoutedComponent } from './perro-new-user-routed.component';

describe('PerroNewUserRoutedComponent', () => {
  let component: PerroNewUserRoutedComponent;
  let fixture: ComponentFixture<PerroNewUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroNewUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroNewUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
