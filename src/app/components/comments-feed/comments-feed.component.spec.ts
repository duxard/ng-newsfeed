import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentService } from '../shared/services/comment.service';

import { CommentsFeedComponent } from './comments-feed.component';

describe('CommentsFeedComponent', () => {
  let component: CommentsFeedComponent;
  let fixture: ComponentFixture<CommentsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsFeedComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ CommentService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CommentsFeedComponent', () => {
    expect(component).toBeTruthy();
  });
});
