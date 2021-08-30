import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listado3Component } from './listado3.component';

describe('Listado3Component', () => {
  let component: Listado3Component;
  let fixture: ComponentFixture<Listado3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listado3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Listado3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
