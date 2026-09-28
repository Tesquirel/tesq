import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationSanityComponent } from './automation-sanity.component';

describe('AutomationSanityComponent', () => {
  let component: AutomationSanityComponent;
  let fixture: ComponentFixture<AutomationSanityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationSanityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationSanityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
