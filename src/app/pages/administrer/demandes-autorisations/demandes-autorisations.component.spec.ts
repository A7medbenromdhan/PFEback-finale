import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesAutorisationsComponent } from './demandes-autorisations.component';

describe('DemandesAutorisationsComponent', () => {
  let component: DemandesAutorisationsComponent;
  let fixture: ComponentFixture<DemandesAutorisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesAutorisationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesAutorisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
