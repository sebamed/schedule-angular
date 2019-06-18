import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { ILessonCreate } from 'src/app/common/model/dto/lesson-create.dto';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { ToastService } from 'src/app/common/services/toast.service';
import { LessonService } from 'src/app/common/services/lesson.service';
import { ILesson } from 'src/app/common/model/lesson.model';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-user-calendar-request-window',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.scss', '../common/scss/style.scss']
})

export class RequestLessonWindowComponent implements OnInit {

    lesson_types: string[] = [];
    lesson_material: string[] = [];
    lesson: ILessonCreate;

    constructor(public windowRef: NbWindowRef,
        private _toast: ToastService,
        private _lesson: LessonService) { }

    ngOnInit() {
        this.lesson = this.windowRef.config.context['lesson'];
        this.lesson_types = AppConstants.LESSON_TYPES;
        this.lesson_material = AppConstants.LESSON_MATERIAL;
    }

    addType(type: string) {
        this.lesson.course.types.push(type);
        this.lesson_types.splice(this.lesson_types.indexOf(type), 1);
    }

    removeType(type: string) {
        this.lesson_types.push(type);
        this.lesson.course.types.splice(this.lesson.course.types.indexOf(type), 1);
    }

    addMaterial(material: string) {
        this.lesson.course.material.push(material);
        this.lesson_material.splice(this.lesson_material.indexOf(material), 1);
    }

    removeMaterial(material: string) {
        this.lesson_material.push(material);
        this.lesson.course.material.splice(this.lesson.course.material.indexOf(material), 1);
    }

    close() {
        this.windowRef.close();
    }

    request() {
        const minutes = document.getElementById('minutes') as HTMLInputElement;

        if (Number(minutes.value) < 0 || Number(minutes.value) > 59) {
            this._toast.addErrorToast(AppConstants.TOAST_CHECK_EMAIL);
        } else {
            this.lesson.time = this.lesson.time.toString().slice(0, 3) + minutes.value + ':00';
            console.log(this.lesson);
        }

        if (this.lesson.course.material.length < 1 || this.lesson.course.types.length < 1) {
            this._toast.addErrorToast(AppConstants.TOAST_FIELD_EMPTY);
        } else {
            this._lesson.request(this.lesson).subscribe((data: ILesson) => {
                this._toast.addSuccessToast(AppConstants.TOAST_SUCCESSFULLY_REQUESTED);
                this.close();
            }, (error: IErrorResponse) => {
                this._toast.addErrorToast(error.errorMessage);
            });
        }
    }
}
