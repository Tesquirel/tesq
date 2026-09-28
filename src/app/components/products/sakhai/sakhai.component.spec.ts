import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SakhaiComponent } from './sakhai.component';

describe('SakhaiComponent', () => {
  let component: SakhaiComponent;
  let fixture: ComponentFixture<SakhaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SakhaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SakhaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
