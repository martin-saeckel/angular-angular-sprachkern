import {TimePickerComponent} from './time-picker.component';
import {TestBed} from '@angular/core/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [TimePickerComponent],
  });
});

describe('TimePicker Component', () => {

  it('should change hour-values when clicking buttons', () => {

    const fixture = TestBed.createComponent(TimePickerComponent);
    const timePicker: TimePickerComponent = fixture.componentInstance;
    const element = fixture.nativeElement;

    (<any>timePicker).timeString = '12:20:23';
    timePicker.ngOnChanges(null);
    fixture.detectChanges();
    let input = element.querySelector('div /deep/ #hours > input');
    expect(input.value).toBe('12');
    input = element .querySelector('div /deep/ #minutes > input');
    expect(input.value).toBe('20');
    input = element.querySelector('div /deep/ #seconds > input');
    expect(input.value).toBe('23');
  });

  it('should change hour-values when clicking buttons', () => {

    const fixture = TestBed.createComponent(TimePickerComponent);

    const timePicker: TimePickerComponent = fixture.componentInstance;
    (<any>timePicker).timeString = '12:20:23';
    timePicker.ngOnChanges(null);
    fixture.detectChanges();
    const [incButton, decButton] = fixture.nativeElement
      .querySelectorAll('div /deep/ #hours > button');
    incButton.click();
    expect(timePicker.getTime()).toEqual('13:20:23');

    decButton.click();
    decButton.click();
    expect(timePicker.getTime()).toEqual('11:20:23');
  });
});
