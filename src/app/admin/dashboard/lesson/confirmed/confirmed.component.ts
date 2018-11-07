import { Component, OnInit, OnDestroy } from '@angular/core';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { LessonService } from 'src/app/common/services/lesson.service';
import { IUserInfo } from 'src/app/common/model/user-info.model';
import { ILesson } from 'src/app/common/model/lesson.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-admin-dashboard-lesson-confirmed',
    templateUrl: './confirmed.component.html'
})

export class ConfirmedLessonsComponent implements OnInit, OnDestroy {

    data_loading: Boolean = true;

    emitterSubscription: Subscription;

    user: IUserInfo;

    confirmations: ILesson[] = [];

    constructor(private _auth: AuthService, private _lesson: LessonService) { }

    ngOnInit() {
        this.setUser();
        this.setAllConfirmations();
        this.emitterListener();
    }

    ngOnDestroy() {
        if (this.emitterSubscription !== undefined && this.emitterSubscription != null) {
            this.emitterSubscription.unsubscribe();
        }
    }

    emitterListener() {
        this.emitterSubscription = this._lesson.emitter.subscribe(() => {
            this.data_loading = true;
            this.confirmations = [];
            this.setAllConfirmations();
        });
    }

    setAllConfirmations() {
        this._lesson.getConfirmedLessonsByTeachersId(this.user.id).subscribe((data: ILesson[]) => {
            this.confirmations = data;
            this.data_loading = false;
        }, (error: IErrorResponse) => {
            this.data_loading = false;
        });
    }

    setUser() {
        this.user = this._auth.getUser();
    }
}
