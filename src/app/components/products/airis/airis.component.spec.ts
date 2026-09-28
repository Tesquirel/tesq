import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirisComponent } from './airis.component';

describe('AirisComponent', () => {
  let component: AirisComponent;
  let fixture: ComponentFixture<AirisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
