import { ICourse } from '../course.model';

export interface ILessonCreate {
    userId: number;
    course: ICourse;
    date: Date;
    time: Date;
}
