import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { ToastService } from 'src/app/common/services/toast.service';
import { LessonService } from 'src/app/common/services/lesson.service';
import { ILesson } from 'src/app/common/model/lesson.model';
import { IUserInfo } from 'src/app/common/model/user-info.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { ApiConsts } from 'src/app/common/constants/api.constants';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { IErrorResponse } from 'src/app/common/model/error-response.model';

@Component({
    selector: 'app-user-calendar-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss', '../common/scss/style.scss']
})

export class LessonInfoWindowComponent implements OnInit {

    lessonID: number;
    lesson: ILesson;

    user: IUserInfo;

    userJoinedLesson: Boolean = false;

    constructor(public windowRef: NbWindowRef,
        private _toast: ToastService,
        private _lesson: LessonService,
        private _auth: AuthService) { }

    ngOnInit() {
        this.lessonID = this.windowRef.config.context['id'];
        this.setLesson();
        this.user = this._auth.getUser();
    }

    setLesson() {
        this._lesson.get(this.lessonID).subscribe((data: ILesson) => {
            console.log(data);
            this.lesson = data;
            this.lesson.students.forEach(student => {
                if (student.id === this.user.id) {
                    this.userJoinedLesson = true;
                    return;
                }
            });
        });
    }

    close() {
        this.windowRef.close();
    }

    leave() {
        this._lesson.leave({
            userId: this.user.id,
            lessonId: this.lesson.id
        }).subscribe((data: ILesson) => {
            this._toast.addSuccessToast(AppConstants.TOAST_SUCCESSFULLY_LEFT);
            this.close();
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }

    join() {
        this._lesson.join({
            userId: this.user.id,
            lessonId: this.lesson.id
        }).subscribe((data: ILesson) => {
            this._toast.addSuccessToast(AppConstants.TOAST_SUCCESSFULLY_JOINED);
            this.close();
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }
}
