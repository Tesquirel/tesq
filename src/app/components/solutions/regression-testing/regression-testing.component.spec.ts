import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionTestingComponent } from './regression-testing.component';

describe('RegressionTestingComponent', () => {
  let component: RegressionTestingComponent;
  let fixture: ComponentFixture<RegressionTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegressionTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegressionTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
