import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopaseoEditAdminRoutedComponent } from './tipopaseo-edit-admin-routed.component';

describe('TipopaseoEditAdminRoutedComponent', () => {
  let component: TipopaseoEditAdminRoutedComponent;
  let fixture: ComponentFixture<TipopaseoEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopaseoEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipopaseoEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
