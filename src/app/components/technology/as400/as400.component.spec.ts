import { ComponentFixture, TestBed } from '@angular/core/testing';

import { As400Component } from './as400.component';

describe('As400Component', () => {
  let component: As400Component;
  let fixture: ComponentFixture<As400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [As400Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(As400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
