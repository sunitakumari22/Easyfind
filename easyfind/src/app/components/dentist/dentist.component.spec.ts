import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistComponent } from './dentist.component';

describe('DentistComponent', () => {
  let component: DentistComponent;
  let fixture: ComponentFixture<DentistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
