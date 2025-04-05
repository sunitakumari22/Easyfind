import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatInfoComponent } from './all-cat-info.component';

describe('AllCatInfoComponent', () => {
  let component: AllCatInfoComponent;
  let fixture: ComponentFixture<AllCatInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCatInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
