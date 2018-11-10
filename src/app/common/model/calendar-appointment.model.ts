import { Time } from '@angular/common';
import { ILesson } from './lesson.model';
import { ISubject } from './subject.model';

export interface ICalendarAppointment {
    time: Time;
    lessons: ILesson[];
}
