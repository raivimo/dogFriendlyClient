import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopaseoViewAdminRoutedComponent } from './tipopaseo-view-admin-routed.component';

describe('TipopaseoViewAdminRoutedComponent', () => {
  let component: TipopaseoViewAdminRoutedComponent;
  let fixture: ComponentFixture<TipopaseoViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopaseoViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipopaseoViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
