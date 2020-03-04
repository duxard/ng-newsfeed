import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { AddMessageFormComponent } from './add-message-form/add-message-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsFeedSpinnerComponent } from './news-feed-spinner/news-feed-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    AddMessageFormComponent,
    NewsFeedSpinnerComponent
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
