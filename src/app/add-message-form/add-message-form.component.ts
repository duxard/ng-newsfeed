import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NoWhitespaces } from '../shared/validators/nowhitespaces.validator';
import { UpdatenewsService } from '../shared/services/updatenews.service';

@Component({
  selector: 'app-add-message-form',
  templateUrl: './add-message-form.component.html',
  styleUrls: ['./add-message-form.component.scss']
})
export class AddMessageFormComponent implements OnInit {

  addNewsForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4), NoWhitespaces]],
    message: ['', [Validators.required, NoWhitespaces]]
  });

  constructor(
    public newsService: NewsService,
    private fb: FormBuilder,
    private updatenewsService: UpdatenewsService
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
      ...this.addNewsForm.value,
      rating: this.getRandomRating(),
      date: new Date()
    };

    this.newsService.createNews(dataToSend).subscribe(res => {
      console.log('News created!');
      this.updatenewsService.sendUpdateNewsEvent();
    }, error => {
      console.log(error);
    });

    this.addNewsForm.patchValue({
      username: '',
      message: ''
    });
  }
}
