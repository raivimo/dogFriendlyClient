import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopaseoNewAdminRoutedComponent } from './tipopaseo-new-admin-routed.component';

describe('TipopaseoNewAdminRoutedComponent', () => {
  let component: TipopaseoNewAdminRoutedComponent;
  let fixture: ComponentFixture<TipopaseoNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopaseoNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipopaseoNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
