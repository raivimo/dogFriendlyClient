import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroEditUserRoutedComponent } from './perro-edit-user-routed.component';

describe('PerroEditUserRoutedComponent', () => {
  let component: PerroEditUserRoutedComponent;
  let fixture: ComponentFixture<PerroEditUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroEditUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroEditUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
