import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsCategoryComponent } from './doctors-category.component';

describe('DoctorsCategoryComponent', () => {
  let component: DoctorsCategoryComponent;
  let fixture: ComponentFixture<DoctorsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
