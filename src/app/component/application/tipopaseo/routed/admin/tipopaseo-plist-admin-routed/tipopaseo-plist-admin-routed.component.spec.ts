import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopaseoPlistAdminRoutedComponent } from './tipopaseo-plist-admin-routed.component';

describe('TipopaseoPlistAdminRoutedComponent', () => {
  let component: TipopaseoPlistAdminRoutedComponent;
  let fixture: ComponentFixture<TipopaseoPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopaseoPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipopaseoPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
