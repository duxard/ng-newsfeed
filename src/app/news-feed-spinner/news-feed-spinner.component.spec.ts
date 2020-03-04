import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedSpinnerComponent } from './news-feed-spinner.component';

describe('NewsFeedSpinnerComponent', () => {
  let component: NewsFeedSpinnerComponent;
  let fixture: ComponentFixture<NewsFeedSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
