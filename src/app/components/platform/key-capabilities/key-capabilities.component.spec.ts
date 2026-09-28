import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCapabilitiesComponent } from './key-capabilities.component';

describe('KeyCapabilitiesComponent', () => {
  let component: KeyCapabilitiesComponent;
  let fixture: ComponentFixture<KeyCapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyCapabilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
