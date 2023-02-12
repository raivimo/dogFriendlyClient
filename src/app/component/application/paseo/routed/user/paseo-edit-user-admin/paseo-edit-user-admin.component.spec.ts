import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoEditUserAdminComponent } from './paseo-edit-user-admin.component';

describe('PaseoEditUserAdminComponent', () => {
  let component: PaseoEditUserAdminComponent;
  let fixture: ComponentFixture<PaseoEditUserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseoEditUserAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaseoEditUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
