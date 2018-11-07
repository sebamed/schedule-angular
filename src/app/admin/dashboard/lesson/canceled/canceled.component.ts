import { Component, OnInit } from '@angular/core';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { LessonService } from 'src/app/common/services/lesson.service';
import { ILesson } from 'src/app/common/model/lesson.model';
import { IUserInfo } from 'src/app/common/model/user-info.model';

@Component({
    selector: 'app-admin-dashboard-lesson-canceled',
    templateUrl: './canceled.component.html'
})

export class CanceledLessonsComponent implements OnInit {
    user: IUserInfo;

    lessons: ILesson[] = [];

    constructor(private _auth: AuthService, private _lesson: LessonService) { }

    ngOnInit() {
        this.setUser();
        this.setAllCanceledLessons();
    }

    setAllCanceledLessons() {
        this._lesson.getCanceledLessonsByTeachersId(this.user.id).subscribe((data: ILesson[]) => {
            this.lessons = data;
        }, (error: IErrorResponse) => {
        });

        console.log(this.lessons);
    }

    setUser() {
        this.user = this._auth.getUser();
    }
}
