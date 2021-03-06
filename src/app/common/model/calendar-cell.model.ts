import { Time } from '@angular/common';
import { ILesson } from './lesson.model';
import { ISubject } from './subject.model';

export interface ICalendarCell {
    date: Date;
    times: Time[];
    lesson?: ILesson;
    subjects?: ISubject[];
}
