import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustverseOverviewComponent } from './trustverse-overview.component';

describe('TrustverseOverviewComponent', () => {
  let component: TrustverseOverviewComponent;
  let fixture: ComponentFixture<TrustverseOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustverseOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustverseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
