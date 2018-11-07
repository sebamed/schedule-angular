import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IUserInfo } from 'src/app/common/model/user-info.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { LessonService } from 'src/app/common/services/lesson.service';
import { ILesson } from 'src/app/common/model/lesson.model';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { Subscription } from 'rxjs';
import { ConfirmLessonWindowComponent } from '../windows/confirm/confirm-lesson.component';

@Component({
    selector: 'app-admin-dashboard-lesson-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss']
})

export class LessonRequestsComponent implements OnInit {

    user: IUserInfo;

    requests: any[] = [];

    constructor(private _auth: AuthService, private _lesson: LessonService) { }

    ngOnInit() {
        this.setUser();
        this.setAllUserSkills();
    }

    setAllUserSkills() {
        this.user.skills.forEach(skill => {
            console.log(skill);
            this._lesson.getLessonsBySkillName(skill.name).subscribe((data: ILesson[]) => {
                this.requests.push({
                    skill: skill.name,
                    lessons: data
                });
            }, (error: IErrorResponse) => {
                this.requests.push({
                    skill: skill.name,
                    lessons: []
                });
            });
        });
        console.log(this.requests);
    }

    setUser() {
        this.user = this._auth.getUser();
    }
}
