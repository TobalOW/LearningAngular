import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaLocoComponent } from './hola-loco.component';

describe('HolaLocoComponent', () => {
  let component: HolaLocoComponent;
  let fixture: ComponentFixture<HolaLocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaLocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaLocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
