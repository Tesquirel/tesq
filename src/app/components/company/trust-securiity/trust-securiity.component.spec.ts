import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustSecuriityComponent } from './trust-securiity.component';

describe('TrustSecuriityComponent', () => {
  let component: TrustSecuriityComponent;
  let fixture: ComponentFixture<TrustSecuriityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustSecuriityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustSecuriityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
