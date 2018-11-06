import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { ILesson } from 'src/app/common/model/lesson.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { IUserInfo } from 'src/app/common/model/user-info.model';
import { LessonService } from 'src/app/common/services/lesson.service';
import { ILessonConfirm } from 'src/app/common/model/dto/lesson-confirm.dto';
import { ToastService } from 'src/app/common/services/toast.service';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { IErrorResponse } from 'src/app/common/model/error-response.model';

@Component({
    selector: 'app-admin-dashboard-lesson-view-confirm',
    templateUrl: './confirm-lesson.component.html',
    styleUrls: ['./confirm-lesson.component.scss']
})

export class ConfirmLessonWindowComponent implements OnInit {

    lesson: ILesson;
    user: IUserInfo;
    confirmDTO: ILessonConfirm;

    constructor(public windowRef: NbWindowRef, private _auth: AuthService, private _lesson: LessonService, private _toast: ToastService) { }

    ngOnInit() {
        this.lesson = this.windowRef.config.context['lesson'];
        this.user = this._auth.getUser();
    }

    close() {
        this.windowRef.close();
    }

    confirm() {
        const price = document.getElementById('price') as HTMLInputElement;
        const duration = document.getElementById('duration') as HTMLInputElement;

        this.confirmDTO = {
            lessonId: this.lesson.id,
            userId: this.user.id,
            price: Number(price.value),
            length: Number(duration.value)
        };

        if (this.confirmDTO.price === 0 || this.confirmDTO.length === 0) {
            this._toast.addErrorToast(AppConstants.TOAST_FIELD_EMPTY);
            return;
        } else {
            this._lesson.confirm(this.confirmDTO).subscribe((data: ILesson) => {
                if (data.confirmed) {
                    this._toast.addSuccessToast(AppConstants.TOAST_SUCCESSFULLY_CONFIRMED + '. ' + AppConstants.TOAST_CHECK_EMAIL);
                    this.close();
                }
            }, (error: IErrorResponse) => {
                this._toast.addErrorToast(error.errorMessage);
            });
        }

    }
}
