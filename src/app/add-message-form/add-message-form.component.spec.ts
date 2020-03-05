import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsService } from '../shared/services/news.service';
import { FormBuilder } from '@angular/forms';

import { AddMessageFormComponent } from './add-message-form.component';

describe('AddMessageFormComponent', () => {
  let component: AddMessageFormComponent;
  let fixture: ComponentFixture<AddMessageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMessageFormComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ NewsService, FormBuilder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddMessageFormComponent', () => {
    expect(component).toBeTruthy();
  });
});
