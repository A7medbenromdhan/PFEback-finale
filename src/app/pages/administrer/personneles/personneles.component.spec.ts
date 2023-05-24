import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelesComponent } from './personneles.component';

describe('PersonnelesComponent', () => {
  let component: PersonnelesComponent;
  let fixture: ComponentFixture<PersonnelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
