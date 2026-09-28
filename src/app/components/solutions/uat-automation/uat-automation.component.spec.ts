import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UatAutomationComponent } from './uat-automation.component';

describe('UatAutomationComponent', () => {
  let component: UatAutomationComponent;
  let fixture: ComponentFixture<UatAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UatAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UatAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
