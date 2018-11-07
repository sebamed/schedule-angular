import { Component, OnInit } from '@angular/core';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { LessonService } from 'src/app/common/services/lesson.service';
import { IUserInfo } from 'src/app/common/model/user-info.model';
import { ILesson } from 'src/app/common/model/lesson.model';

@Component({
    selector: 'app-admin-dashboard-lesson-confirmed',
    templateUrl: './confirmed.component.html'
})

export class ConfirmedLessonsComponent implements OnInit {

    user: IUserInfo;

    confirmations: ILesson[] = [];

    constructor(private _auth: AuthService, private _lesson: LessonService) { }

    ngOnInit() {
        this.setUser();
        this.setAllConfirmations();
    }

    setAllConfirmations() {
        this._lesson.getConfirmedLessonsByTeachersId(this.user.id).subscribe((data: ILesson[]) => {
            this.confirmations = data;
        }, (error: IErrorResponse) => {
        });

        console.log(this.confirmations);
    }

    setUser() {
        this.user = this._auth.getUser();
    }
}
