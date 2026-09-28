import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationRoiComponent } from './automation-roi.component';

describe('AutomationRoiComponent', () => {
  let component: AutomationRoiComponent;
  let fixture: ComponentFixture<AutomationRoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationRoiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationRoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
