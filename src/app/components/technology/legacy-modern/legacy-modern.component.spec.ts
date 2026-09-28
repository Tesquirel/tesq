import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyModernComponent } from './legacy-modern.component';

describe('LegacyModernComponent', () => {
  let component: LegacyModernComponent;
  let fixture: ComponentFixture<LegacyModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegacyModernComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegacyModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
