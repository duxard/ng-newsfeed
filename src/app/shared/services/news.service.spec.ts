import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsService } from './news.service';
import { INews } from '../models/INews';

describe('NewsSevice', () => {
  let newsService: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ NewsService ]
    });

    newsService = TestBed.get(NewsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it(`should retrieve data from REST endpoint by GET`, () => {
    const dummyNews: INews[] = [
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

    newsService.fetchNews().subscribe(dataReceived => {
      console.log(dataReceived);
      expect(dataReceived.length).toBe(2);
      expect(dataReceived).toEqual(dummyNews);
    });

    const request = httpMock.expectOne(`${newsService.apiBase}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyNews);
  });
});
