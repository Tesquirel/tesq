import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualTestingComponent } from './visual-testing.component';

describe('VisualTestingComponent', () => {
  let component: VisualTestingComponent;
  let fixture: ComponentFixture<VisualTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
