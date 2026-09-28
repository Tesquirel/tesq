import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreezComponent } from './breez.component';

describe('BreezComponent', () => {
  let component: BreezComponent;
  let fixture: ComponentFixture<BreezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
