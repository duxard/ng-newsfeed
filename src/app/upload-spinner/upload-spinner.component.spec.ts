import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSpinnerComponent } from './upload-spinner.component';

describe('UploadSpinnerComponent', () => {
  let component: UploadSpinnerComponent;
  let fixture: ComponentFixture<UploadSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
