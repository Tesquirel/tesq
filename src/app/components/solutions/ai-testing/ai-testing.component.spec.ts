import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTestingComponent } from './ai-testing.component';

describe('AiTestingComponent', () => {
  let component: AiTestingComponent;
  let fixture: ComponentFixture<AiTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
