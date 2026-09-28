import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTrustComponent } from './ai-trust.component';

describe('AiTrustComponent', () => {
  let component: AiTrustComponent;
  let fixture: ComponentFixture<AiTrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTrustComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
