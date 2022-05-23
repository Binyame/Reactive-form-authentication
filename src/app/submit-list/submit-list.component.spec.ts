import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitListComponent } from './submit-list.component';

describe('SubmitListComponent', () => {
  let component: SubmitListComponent;
  let fixture: ComponentFixture<SubmitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
