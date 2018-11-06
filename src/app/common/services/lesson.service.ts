import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILesson } from '../model/lesson.model';
import { ApiConsts } from '../constants/api.constants';
import { ILessonConfirm } from '../model/dto/lesson-confirm.dto';

@Injectable({ providedIn: 'root' })
export class LessonService {

    constructor(private _http: HttpClient) { }

    confirm(lesson: ILessonConfirm) {
        return this._http.post<ILesson>(ApiConsts.LESSON_CONFIRM, lesson);
    }

    getLessonsBySkillName(name: string) {
        return this._http.get<ILesson[]>(ApiConsts.LESSON_ALL_BY_SKILL_NAME + name);
    }

}
