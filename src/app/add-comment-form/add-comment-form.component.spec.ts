import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentService } from '../shared/services/comment.service';
import { FormBuilder } from '@angular/forms';

import { AddCommentFormComponent } from './add-comment-form.component';

describe('AddCommentFormComponent', () => {
  let component: AddCommentFormComponent;
  let fixture: ComponentFixture<AddCommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommentFormComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ CommentService, FormBuilder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddCommentFormComponent', () => {
    expect(component).toBeTruthy();
  });
});
