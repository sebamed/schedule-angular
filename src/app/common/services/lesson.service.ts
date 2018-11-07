import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILesson } from '../model/lesson.model';
import { ApiConsts } from '../constants/api.constants';
import { ILessonConfirm } from '../model/dto/lesson-confirm.dto';
import { IUserLesson } from '../model/dto/user-lesson.dto';

@Injectable({ providedIn: 'root' })
export class LessonService {

    constructor(private _http: HttpClient) { }

    cancel(userLesson: IUserLesson) {
        return this._http.post<ILesson>(ApiConsts.LESSON_CANCEL, userLesson);
    }

    confirm(lesson: ILessonConfirm) {
        return this._http.post<ILesson>(ApiConsts.LESSON_CONFIRM, lesson);
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

}
