import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchitectureComponent } from './achitecture.component';

describe('AchitectureComponent', () => {
  let component: AchitectureComponent;
  let fixture: ComponentFixture<AchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchitectureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
