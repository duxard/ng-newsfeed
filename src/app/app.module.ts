import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsFeedComponent } from './comments-feed/comments-feed.component';
import { AddCommentFormComponent } from './add-comment-form/add-comment-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadSpinnerComponent } from './upload-spinner/upload-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsFeedComponent,
    AddCommentFormComponent,
    UploadSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
