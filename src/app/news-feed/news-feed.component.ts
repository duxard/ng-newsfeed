import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  public loading = true;

  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.fetchNews()
      .subscribe(data => {
        this.loading = false;
        /*
        console.log(this.newsService.news);
        or just:
        console.log(data);
        */
      }, error => {
        console.log(error);
      });
  }

}
