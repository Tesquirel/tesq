import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTechComponent } from './health-tech.component';

describe('HealthTechComponent', () => {
  let component: HealthTechComponent;
  let fixture: ComponentFixture<HealthTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
