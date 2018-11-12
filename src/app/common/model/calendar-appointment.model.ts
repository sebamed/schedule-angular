import { Time } from '@angular/common';
import { ICalendarDayLesson } from './calendar-day-lesson.model';

export interface ICalendarAppointment {
    time: Time;
    lessons: ICalendarDayLesson[];
}
