import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationApproachComponent } from './automation-approach.component';

describe('AutomationApproachComponent', () => {
  let component: AutomationApproachComponent;
  let fixture: ComponentFixture<AutomationApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationApproachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
