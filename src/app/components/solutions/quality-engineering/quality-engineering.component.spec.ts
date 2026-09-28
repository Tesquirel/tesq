import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityEngineeringComponent } from './quality-engineering.component';

describe('QualityEngineeringComponent', () => {
  let component: QualityEngineeringComponent;
  let fixture: ComponentFixture<QualityEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityEngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
