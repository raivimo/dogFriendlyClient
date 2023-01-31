import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaNewAdminRoutedComponent } from './raza-new-admin-routed.component';

describe('RazaNewAdminRoutedComponent', () => {
  let component: RazaNewAdminRoutedComponent;
  let fixture: ComponentFixture<RazaNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazaNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazaNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
