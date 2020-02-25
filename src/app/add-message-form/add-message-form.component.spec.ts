import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessageFormComponent } from './add-message-form.component';

describe('AddMessageFormComponent', () => {
  let component: AddMessageFormComponent;
  let fixture: ComponentFixture<AddMessageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMessageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
