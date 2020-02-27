import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-message-form',
  templateUrl: './add-message-form.component.html',
  styleUrls: ['./add-message-form.component.scss']
})
export class AddMessageFormComponent implements OnInit {

  public addNewsForm = new FormGroup({
    userName: new FormControl(''),
    newsMessage: new FormControl('')
  });

  constructor(
    public newsService: NewsService
  ) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.warn( this.addNewsForm.value );

    this.addNewsForm.patchValue({
      userName: '',
      newsMessage: ''
    });
  }
}
