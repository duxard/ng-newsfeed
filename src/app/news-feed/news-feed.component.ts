import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news.service';
import { UpdatenewsService } from '../shared/services/updatenews.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  public loading = true;
  private clickEventsubscription: Subscription;

  constructor(
    public newsService: NewsService,
    private updatenewsService: UpdatenewsService
  ) {
      this.clickEventsubscription = this.updatenewsService.getUpdateNewsEvent().subscribe(() => {
        this.uploadNews();
      });
  }

  ngOnInit(): void {
    this.uploadNews();
  }

  uploadNews() {
    this.newsService.fetchNews()
      .subscribe(data => {
        this.loading = false;
        console.log(data);
        /*
        console.log(this.newsService.news);
        or just:
        console.log(data);
        */
      }, error => {
        console.log(error);
      });
  }

  getRatingArray(rating: number) {
   return Array.from({length: rating}, (e, i) => i);
  }
}
