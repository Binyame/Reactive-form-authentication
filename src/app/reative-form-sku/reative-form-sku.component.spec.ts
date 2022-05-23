import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeFormSkuComponent } from './reative-form-sku.component';

describe('ReativeFormSkuComponent', () => {
  let component: ReativeFormSkuComponent;
  let fixture: ComponentFixture<ReativeFormSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativeFormSkuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeFormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
