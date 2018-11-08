import { Time } from '@angular/common';
import { ILesson } from './lesson.model';

export interface ICalendarCell {
    date: Date;
    times: Time[];
    lesson?: ILesson;
}
