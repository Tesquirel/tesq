import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortifaiComponent } from './fortifai.component';

describe('FortifaiComponent', () => {
  let component: FortifaiComponent;
  let fixture: ComponentFixture<FortifaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortifaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortifaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
