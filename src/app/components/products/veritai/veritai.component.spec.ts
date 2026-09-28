import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeritaiComponent } from './veritai.component';

describe('VeritaiComponent', () => {
  let component: VeritaiComponent;
  let fixture: ComponentFixture<VeritaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeritaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeritaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
