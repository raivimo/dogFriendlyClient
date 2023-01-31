import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopaseoRemoveAdminRoutedComponent } from './tipopaseo-remove-admin-routed.component';

describe('TipopaseoRemoveAdminRoutedComponent', () => {
  let component: TipopaseoRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<TipopaseoRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopaseoRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipopaseoRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
