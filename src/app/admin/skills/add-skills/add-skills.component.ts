import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../common/services/toast.service';
import { SubjectService } from '../../../common/services/subject.service';
import { ISubject } from '../../../common/model/subject.model';
import { IErrorResponse } from '../../../common/model/error-response.model';
import { UserService } from '../../../common/services/user.service';
import { AuthService } from '../../../common/services/auth.service';
import { AppConstants } from '../../../common/constants/app.constants';

@Component({
    selector: 'app-admin-skills',
    templateUrl: './add-skills.component.html',
    styleUrls: ['./add-skills.component.scss']
})

export class AddSkillsComponent implements OnInit {

    // spinners
    userSkills_loading: Boolean = true;
    subjects_loading: Boolean = true;

    subjects: ISubject[] = [];
    userSkills: ISubject[] = [];

    constructor(private _toast: ToastService,
        private _subject: SubjectService,
        private _user: UserService,
        private _auth: AuthService
    ) { }

    ngOnInit() {
        this.setUserSkills();
    }

    setAllSkills() {
        this._subject.getAllSubjects().subscribe((data: ISubject[]) => {
            data.forEach(subject => {
                this.userSkills.forEach(skill => {
                    if (subject.name === skill.name) {
                        data.splice(data.indexOf(subject), 1);
                    }
                });
            });
            this.subjects = data;
            this.subjects_loading = false;
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }


    setUserSkills() {
        const user = this._auth.getUser();
        this._user.getUserSkills(user.id).subscribe((data: ISubject[]) => {
            this.userSkills = data;
            this.userSkills_loading = false;
            this.setAllSkills();
        }, (error: IErrorResponse) => {
            this.userSkills = [];
            this._toast.addErrorToast(AppConstants.TOAST_LIST_EMPTY);
            this.setAllSkills();
            this.userSkills_loading = false;
        });
    }

    save() {
        const user = this._auth.getUser();
        this._user.updateUserSkills(user.id, this.userSkills).subscribe(() => {
            this._toast.addSuccessToast(AppConstants.TOAST_SUCCESSFULLY_UPDATED);
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }

    addSkill(subject: ISubject) {
        this.userSkills.push(subject);
        this.subjects.splice(this.subjects.indexOf(subject), 1);
    }

    removeSkill(subject: ISubject) {
        this.userSkills.splice(this.userSkills.indexOf(subject), 1);
        this.subjects.push(subject);
    }
}
