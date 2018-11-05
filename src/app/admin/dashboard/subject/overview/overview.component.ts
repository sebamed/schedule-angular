import { Component, OnInit, NgZone } from '@angular/core';
import { DashboardConstants } from '../../common/constants/dashboard.constants';
import { ISubject } from 'src/app/common/model/subject.model';
import { SubjectService } from 'src/app/common/services/subject.service';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { ToastService } from 'src/app/common/services/toast.service';
import { LocalDataSource } from 'ng2-smart-table';
import { AppConstants } from 'src/app/common/constants/app.constants';

@Component({
    selector: 'app-admin-dashboard-subject-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})

export class SubjectOverviewComponent implements OnInit {

    data_loading: Boolean = true;

    table_settings: any;

    subjects: ISubject[] = [];

    dataSource;

    constructor(private _subject: SubjectService, private _toast: ToastService) { }

    ngOnInit() {
        this.dataSource = new LocalDataSource();
        this.table_settings = DashboardConstants.TABLE_SETTINGS_SUBJECT;
        this.setAllSubjects();
    }

    setAllSubjects() {
        this._subject.getAllSubjects().subscribe((data: ISubject[]) => {
            this.subjects = data;
            this.dataSource.load(this.subjects);
            this.dataSource.reset();
            this.data_loading = false;
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }

    onEditConfirm(event): void {
        if (event.newData.name === '') {
            this._toast.addErrorToast(AppConstants.TOAST_FIELD_EMPTY);
        } else {
            this._subject.update(event.newData).subscribe((data: ISubject) => {
                this._toast.addSuccessToast(AppConstants.TOAST_SUCCESSFULLY_UPDATED);
                event.confirm.resolve();
                this.setAllSubjects();
            }, (error: IErrorResponse) => {
                this._toast.addErrorToast(error.errorMessage);
            });
        }
    }

    onCreateConfirm(event) {
        if (event.newData.name === '') {
            this._toast.addErrorToast(AppConstants.TOAST_FIELD_EMPTY);
        } else {
            this._subject.create(event.newData).subscribe((data: ISubject) => {
                event.newData.id = data.id;
                event.confirm.resolve();
                this.setAllSubjects();
                this._toast.addSuccessToast(AppConstants.TOAST_SUCCESSFULLY_CREATED);
            }, (error: IErrorResponse) => {
                this._toast.addErrorToast(error.errorMessage);
            });
        }
    }
}
