import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenticAiComponent } from './agentic-ai.component';

describe('AgenticAiComponent', () => {
  let component: AgenticAiComponent;
  let fixture: ComponentFixture<AgenticAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenticAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenticAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
