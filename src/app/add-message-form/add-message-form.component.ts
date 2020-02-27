import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    console.warn( this.addNewsForm.value );
    console.log( this.addNewsForm.status );

    this.addNewsForm.patchValue({
      userName: '',
      newsMessage: ''
    });
  }
}
