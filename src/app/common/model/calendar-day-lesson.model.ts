import { ICourse } from './course.model';

export interface ICalendarDayLesson {
    id: number;
    confirmed: boolean;
    canceled: boolean;
    new: boolean;
    date: Date;
    time: Date;
    course: ICourse;
}
