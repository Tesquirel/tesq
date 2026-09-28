import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App92PercentComponent } from './app92-percent.component';

describe('App92PercentComponent', () => {
  let component: App92PercentComponent;
  let fixture: ComponentFixture<App92PercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App92PercentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App92PercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
