import { Component, OnInit } from '@angular/core';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { SubjectService } from 'src/app/common/services/subject.service';
import { ToastService } from 'src/app/common/services/toast.service';
import { UserService } from 'src/app/common/services/user.service';
import { DashboardConstants } from '../../common/constants/dashboard.constants';
import { IRole } from 'src/app/common/model/role.model';
import { ISubject } from 'src/app/common/model/subject.model';
import { IUserInfo } from 'src/app/common/model/user-info.model';

@Component({
    selector: 'app-admin-dashboard-subject-teachers',
    templateUrl: './teachers-by-subject.component.html'
})

export class TeachersBySubjectComponent implements OnInit {

    data_loading: Boolean = true;

    table_settings: any;

    tables: any[] = [];

    subjects: ISubject[] = [];

    constructor(private _subject: SubjectService, private _toast: ToastService, private _user: UserService) { }

    ngOnInit() {
        this.table_settings = DashboardConstants.TABLE_SETTINGS_ENTITY_USER;
        this.getAllSubjects();
    }

    setAllTables(subjects: ISubject[]) {
        subjects.forEach(subject => {
            this._user.getUsersBySubjectId(subject).subscribe((data: IUserInfo[]) => {
                this.tables.push({
                    subject: subject.name,
                    users: data
                });
            }, error => {
                this.tables.push({
                    subject: subject.name,
                    users: []
                });
            });
        });
    }

    getAllSubjects() {
        this._subject.getAllSubjects().subscribe((data: ISubject[]) => {
            this.subjects = data;
            this.setAllTables(this.subjects);
            this.data_loading = false;
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }
}
