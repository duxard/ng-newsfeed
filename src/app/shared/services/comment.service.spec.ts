import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentService } from './comment.service';
import { IComment } from '../models/IComment';

describe('CommentsSevice', () => {
  let commentsService: CommentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CommentService ]
    });

    commentsService = TestBed.get(CommentService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it(`should retrieve data from REST endpoint by GET`, () => {
    const dummyComments: IComment[] = [
      {
        "username": "name",
        "message": "lorem ipsum",
        "rating": 1,
        "date": new Date()
      },
      {
        "username": "name",
        "message": "lorem ipsum",
        "rating": 2,
        "date": new Date()
      }
    ];

    commentsService.fetchComments().subscribe(dataReceived => {
      console.log(dataReceived);
      expect(dataReceived.length).toBe(2);
      expect(dataReceived).toEqual(dummyComments);
    });

    const request = httpMock.expectOne(`${commentsService.apiBase}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyComments);
  });

  it(`should post data to REST endpoint`, () => {
    const dummyComments: IComment = {
      "username": "dummyName",
      "message": "lorem ipsum",
      "rating": 1,
      "date": new Date()
    };

    commentsService.createComment(dummyComments).subscribe(dataReceived => {
      expect(dataReceived.username).toEqual('dummyName');
    });

    const request = httpMock.expectOne(`${commentsService.apiBase}`);
    expect(request.request.method).toBe('POST');
    request.flush(dummyComments);
  });
});
