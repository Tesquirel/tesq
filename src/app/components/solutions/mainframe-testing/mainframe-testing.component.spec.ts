import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainframeTestingComponent } from './mainframe-testing.component';

describe('MainframeTestingComponent', () => {
  let component: MainframeTestingComponent;
  let fixture: ComponentFixture<MainframeTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainframeTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainframeTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
