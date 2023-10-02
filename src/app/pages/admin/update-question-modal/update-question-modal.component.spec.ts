import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionModalComponent } from './update-question-modal.component';

describe('UpdateQuestionModalComponent', () => {
  let component: UpdateQuestionModalComponent;
  let fixture: ComponentFixture<UpdateQuestionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateQuestionModalComponent]
    });
    fixture = TestBed.createComponent(UpdateQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
