import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioRemoveAdminRoutedComponent } from './tipousuario-remove-admin-routed.component';

describe('TipousuarioRemoveAdminRoutedComponent', () => {
  let component: TipousuarioRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<TipousuarioRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
