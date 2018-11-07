import { Component, OnInit } from '@angular/core';
import { ILesson } from 'src/app/common/model/lesson.model';
import { IUserInfo } from 'src/app/common/model/user-info.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { LessonService } from 'src/app/common/services/lesson.service';
import { IErrorResponse } from 'src/app/common/model/error-response.model';

@Component({
    selector: 'app-admin-dashboard-lesson-done',
    templateUrl: './done.component.html'
})

export class DoneLessonsComponent implements OnInit {

    data_loading: Boolean = true;

    user: IUserInfo;

    lessons: ILesson[] = [];

    constructor(private _auth: AuthService, private _lesson: LessonService) { }

    ngOnInit() {
        this.setUser();
        this.setAllDoneLessons();
    }

    setAllDoneLessons() {
        this._lesson.getDoneLessonsByTeachersId(this.user.id).subscribe((data: ILesson[]) => {
            this.lessons = data;
            this.data_loading = false;
        }, (error: IErrorResponse) => {
            this.data_loading = false;
        });

    }

    setUser() {
        this.user = this._auth.getUser();
    }
}
