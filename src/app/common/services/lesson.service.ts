import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILesson } from '../model/lesson.model';
import { ApiConsts } from '../constants/api.constants';
import { ILessonConfirm } from '../model/dto/lesson-confirm.dto';
import { IUserLesson } from '../model/dto/user-lesson.dto';
import { map } from 'rxjs/operators';
import { ICalendarDayLesson } from '../model/calendar-day-lesson.model';
import { ILessonCreate } from '../model/dto/lesson-create.dto';

@Injectable({ providedIn: 'root' })
export class LessonService {

    emitter: EventEmitter<any> = new EventEmitter();

    constructor(private _http: HttpClient) { }

    leave(userLesson: IUserLesson) {
        return this._http.post<ILesson>(ApiConsts.LESSON_LEAVE, userLesson);
    }

    join(userLesson: IUserLesson) {
        return this._http.post<ILesson>(ApiConsts.LESSON_JOIN, userLesson);
    }

    request(lesson: ILessonCreate) {
        return this._http.post<ILesson>(ApiConsts.LESSON_ENDPOINT, lesson)
            .pipe(
                map((data: ILesson) => {
                    this.emitter.emit();
                    return data;
                })
            );
    }

    cancel(userLesson: IUserLesson) {
        return this._http.post<ILesson>(ApiConsts.LESSON_CANCEL, userLesson)
            .pipe(
                map((data: ILesson) => {
                    this.emitter.emit();
                    return data;
                })
            );
    }

    confirm(lesson: ILessonConfirm) {
        return this._http.post<ILesson>(ApiConsts.LESSON_CONFIRM, lesson)
            .pipe(
                map((data: ILesson) => {
                    this.emitter.emit();
                    return data;
                })
            );
    }

    getDoneLessonsByTeachersId(id: number) {
        return this._http.get<ILesson[]>(ApiConsts.LESSON_ALL_DONEBY_TEACHER_ID + id.toString());
    }

    getCanceledLessonsByTeachersId(id: number) {
        return this._http.get<ILesson[]>(ApiConsts.LESSON_ALL_CANCELED_BY_TEACHER_ID + id.toString());
    }

    getConfirmedLessonsByTeachersId(id: number) {
        return this._http.get<ILesson[]>(ApiConsts.LESSON_ALL_BY_TEACHER_ID + id.toString());
    }

    getLessonsBySkillName(name: string) {
        return this._http.get<ILesson[]>(ApiConsts.LESSON_ALL_BY_SKILL_NAME + name);
    }

    getAllCalendarLessons() {
        return this._http.get<ICalendarDayLesson[]>(ApiConsts.LESSON_ENDPOINT);
    }

    get(id: number) {
        return this._http.get<ILesson>(ApiConsts.LESSON_ENDPOINT + '/' + id.toString());
    }

    getAll() {
        return this._http.get<ILesson[]>(ApiConsts.LESSON_ENDPOINT);
    }

}
