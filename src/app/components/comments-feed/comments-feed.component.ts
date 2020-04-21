import { Component, OnInit } from '@angular/core';
import { CommentService } from '../shared/services/comment.service';
import { UpdateCommentsService } from '../shared/services/update-comments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments-feed',
  templateUrl: './comments-feed.component.html',
  styleUrls: ['./comments-feed.component.scss']
})
export class CommentsFeedComponent implements OnInit {

  public loading: boolean = true;
  public showError: boolean = false;
  private clickEventSubscription: Subscription;

  constructor(
    public commentsService: CommentService,
    private _updateCommentsService: UpdateCommentsService
  ) {
      this.clickEventSubscription = this._updateCommentsService.getUpdateCommentsEvent().subscribe(() => {
        this.uploadComments();
      });
  }

  ngOnInit(): void {
    this.uploadComments();
  }

  uploadComments(): void {
    this.commentsService.fetchComments()
      .subscribe(comments => {
        this.loading = false;
        console.log(comments);
        /*
        console.log(this.newsService.news);
        or just:
        console.log(comments);
        */
      }, error => {
        this.showError = true;
        this.loading = false;
        console.log(error);
      });
  }

  getRatingArray(rating: number): number[] {
   return Array.from({length: rating}, (e, i) => i);
  }
}
