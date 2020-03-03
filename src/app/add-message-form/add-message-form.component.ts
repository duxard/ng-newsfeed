import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NoWhitespaces } from '../shared/validators/nowhitespaces.validator';

@Component({
  selector: 'app-add-message-form',
  templateUrl: './add-message-form.component.html',
  styleUrls: ['./add-message-form.component.scss']
})
export class AddMessageFormComponent implements OnInit {

  public addNewsForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4), NoWhitespaces]],
    message: ['', [Validators.required, NoWhitespaces]]
  });
  
  constructor(
    public newsService: NewsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  // TODO: update data on submit
  submitForm() {
    // How to get control value:
    // console.log( this.addNewsForm.get('userName').value );
    // TODO: get rid of zero rating
    const dataToSend = {
      ...this.addNewsForm.value,
      rating: Math.floor(Math.random() * 5),
      date: new Date()
    };

    this.newsService.createNews(dataToSend).subscribe(res => {
      console.log('News created!');
    }, error => {
      console.log(error);
    });

    this.addNewsForm.patchValue({
      username: '',
      message: ''
    });
  }
}
