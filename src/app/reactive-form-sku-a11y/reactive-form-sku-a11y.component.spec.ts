import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSkuA11yComponent } from './reactive-form-sku-a11y.component';

describe('ReactiveFormSkuA11yComponent', () => {
  let component: ReactiveFormSkuA11yComponent;
  let fixture: ComponentFixture<ReactiveFormSkuA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormSkuA11yComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormSkuA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
