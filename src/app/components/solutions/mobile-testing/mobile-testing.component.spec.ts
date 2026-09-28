import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTestingComponent } from './mobile-testing.component';

describe('MobileTestingComponent', () => {
  let component: MobileTestingComponent;
  let fixture: ComponentFixture<MobileTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
