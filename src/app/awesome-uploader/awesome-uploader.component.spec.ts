import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeUploaderComponent } from './awesome-uploader.component';

describe('AwesomeUploaderComponent', () => {
  let component: AwesomeUploaderComponent;
  let fixture: ComponentFixture<AwesomeUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
