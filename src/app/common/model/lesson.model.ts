import { IUserInfo } from './user-info.model';
import { ICourse } from './course.model';

export interface ILesson {
    id: number;
    price: number;
    length: number;
    confirmed: boolean;
    canceled: boolean;
    date: Date;
    time: Date;
    teacher: IUserInfo;
    students: IUserInfo[];
    course: ICourse;
}
