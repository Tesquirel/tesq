import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSoftwareComponent } from './enterprise-software.component';

describe('EnterpriseSoftwareComponent', () => {
  let component: EnterpriseSoftwareComponent;
  let fixture: ComponentFixture<EnterpriseSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterpriseSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
