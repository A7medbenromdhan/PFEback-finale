import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionsComponent } from './sanctions.component';

describe('SanctionsComponent', () => {
  let component: SanctionsComponent;
  let fixture: ComponentFixture<SanctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
