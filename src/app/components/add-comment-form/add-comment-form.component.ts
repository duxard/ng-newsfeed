import { Component, OnInit } from '@angular/core';
import { CommentService } from '../shared/services/comment.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NoWhitespaces } from '../shared/validators/nowhitespaces.validator';
import { UpdateCommentsService } from '../shared/services/update-comments.service';

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.scss']
})
export class AddCommentFormComponent implements OnInit {

  public addCommentForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4), NoWhitespaces]],
    message: ['', [Validators.required, NoWhitespaces]]
  });

  constructor(
    public commentsService: CommentService,
    private fb: FormBuilder,
    private _updateCommentsService: UpdateCommentsService
  ) { }

  ngOnInit(): void {
  }

  getRandomRating(): number {
    const rating = Math.floor(Math.random() * 5);
    return rating === 0 ? 1 : rating;
  }

  submitForm(): void {
    // How to get control value:
    // console.log( this.addNewsForm.get('userName').value );
    const dataToSend = {
      ...this.addCommentForm.value,
      rating: this.getRandomRating(),
      date: new Date()
    };

    this.commentsService.createComment(dataToSend).subscribe(() => {
      console.log('Comment added');
      this._updateCommentsService.sendUpdateCommentsEvent();
    }, error => {
      console.log(error);
    });

    this.addCommentForm.patchValue({
      username: '',
      message: ''
    });
  }
}
