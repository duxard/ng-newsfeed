import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-message-form',
  templateUrl: './add-message-form.component.html',
  styleUrls: ['./add-message-form.component.scss']
})
export class AddMessageFormComponent implements OnInit {

  public addNewsForm = this.fb.group({
    userName: ['', Validators.required],
    newsMessage: ['', Validators.required]
  });
  constructor(
    public newsService: NewsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submitForm() {
    // How to get control value:
    // console.log( this.addNewsForm.get('userName').value );
    let dataToSend = {
      ...this.addNewsForm.value,
      rating: Math.floor(Math.random()*5),
      date: new Date()
    }

    this.newsService.createNews(dataToSend).subscribe(res => {
      console.log('News created!');
    }, error => {
      console.log(error);
    });

    this.addNewsForm.patchValue({
      userName: '',
      newsMessage: ''
    });
  }
}
