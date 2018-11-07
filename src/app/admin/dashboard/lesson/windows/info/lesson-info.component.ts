import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { ILesson } from 'src/app/common/model/lesson.model';
import { LessonService } from 'src/app/common/services/lesson.service';
import { IUserLesson } from 'src/app/common/model/dto/user-lesson.dto';
import { ToastService } from 'src/app/common/services/toast.service';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { IErrorResponse } from 'src/app/common/model/error-response.model';

@Component({
    selector: 'app-admin-dashboard-lesson-view-info',
    templateUrl: './lesson-info.component.html',
    styleUrls: ['../common/scss/style.scss']
})

export class LessonInfoWindowComponent implements OnInit {

    lesson: ILesson;
    userLesson: IUserLesson;

    constructor(public windowRef: NbWindowRef, private _lesson: LessonService, private _toast: ToastService) { }

    ngOnInit() {
        this.lesson = this.windowRef.config.context['lesson'];
    }

    close() {
        this.windowRef.close();
    }

    cancel() {
        this.userLesson = {
            lessonId: this.lesson.id,
            userId: this.lesson.teacher.id
        };
        this._lesson.cancel(this.userLesson).subscribe((data: ILesson) => {
            if (data.canceled === true) {
                this._toast.addSuccessToast(AppConstants.TOAST_SUCCESSFULLY_CANCELED + ' ' + AppConstants.TOAST_CHECK_EMAIL);
                this.close();
            }
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }
}
