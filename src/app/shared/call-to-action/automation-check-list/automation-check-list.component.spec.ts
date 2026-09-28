import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationCheckListComponent } from './automation-check-list.component';

describe('AutomationCheckListComponent', () => {
  let component: AutomationCheckListComponent;
  let fixture: ComponentFixture<AutomationCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationCheckListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
