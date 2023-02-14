import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroFinderUserUnroutedComponent } from './perro-finder-user-unrouted.component';

describe('PerroFinderUserUnroutedComponent', () => {
  let component: PerroFinderUserUnroutedComponent;
  let fixture: ComponentFixture<PerroFinderUserUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroFinderUserUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroFinderUserUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
