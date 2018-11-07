import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { LessonService } from 'src/app/common/services/lesson.service';
import { ILesson } from 'src/app/common/model/lesson.model';

@Component({
    selector: 'app-admin-dashboard-lesson-view-done',
    templateUrl: './lesson-done.component.html',
    styleUrls: ['../common/scss/style.scss']
})

export class LessonDoneWindowComponent implements OnInit {

    lesson: ILesson;

    constructor(public windowRef: NbWindowRef, private _lesson: LessonService) { }

    ngOnInit() {
        this.lesson = this.windowRef.config.context['lesson'];
    }

    close() {
        this.windowRef.close();
    }
}
