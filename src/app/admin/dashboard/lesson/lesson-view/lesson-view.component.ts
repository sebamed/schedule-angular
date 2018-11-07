import { Component, OnInit, Input } from '@angular/core';
import { ILesson } from 'src/app/common/model/lesson.model';
import { NbWindowService } from '@nebular/theme';
import { ConfirmLessonWindowComponent } from '../windows/confirm/confirm-lesson.component';
import { LessonInfoWindowComponent } from '../windows/info/lesson-info.component';

@Component({
    selector: 'app-admin-dashboard-lesson-view',
    templateUrl: './lesson-view.component.html',
    styleUrls: ['./lesson-view.component.scss']
})

export class LessonViewComponent implements OnInit {

    @Input() lesson_type: string;
    @Input() lesson: ILesson;

    constructor(public _window: NbWindowService) { }

    ngOnInit() {

    }

    openInfoWindow() {
        this._window.open(LessonInfoWindowComponent,
            {
                title: 'Info about lesson with ID: ' + this.lesson.id,
                closeOnBackdropClick: true,
                closeOnEsc: true,
                context: {
                    lesson: this.lesson
                }
            });
    }

    openConfirmWindow() {
        this._window.open(ConfirmLessonWindowComponent,
            {
                title: 'Confirm lesson with ID: ' + this.lesson.id,
                closeOnBackdropClick: true,
                closeOnEsc: true,
                context: {
                    lesson: this.lesson
                }
            });
    }
}
