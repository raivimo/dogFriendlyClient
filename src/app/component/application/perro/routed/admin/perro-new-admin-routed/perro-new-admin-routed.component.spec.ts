import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroNewAdminRoutedComponent } from './perro-new-admin-routed.component';

describe('PerroNewAdminRoutedComponent', () => {
  let component: PerroNewAdminRoutedComponent;
  let fixture: ComponentFixture<PerroNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
