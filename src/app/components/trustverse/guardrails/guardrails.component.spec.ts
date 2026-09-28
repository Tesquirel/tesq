import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardrailsComponent } from './guardrails.component';

describe('GuardrailsComponent', () => {
  let component: GuardrailsComponent;
  let fixture: ComponentFixture<GuardrailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardrailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
