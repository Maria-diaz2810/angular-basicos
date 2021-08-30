import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listado1Component } from './listado1.component';

describe('Listado1Component', () => {
  let component: Listado1Component;
  let fixture: ComponentFixture<Listado1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listado1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Listado1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
