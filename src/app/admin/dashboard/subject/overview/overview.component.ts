import { Component, OnInit, NgZone } from '@angular/core';
import { DashboardConstants } from '../../common/constants/dashboard.constants';
import { ISubject } from 'src/app/common/model/subject.model';
import { SubjectService } from 'src/app/common/services/subject.service';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { ToastService } from 'src/app/common/services/toast.service';

@Component({
    selector: 'app-admin-dashboard-subject-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})

export class SubjectOverviewComponent implements OnInit {

    data_loading: Boolean = true;

    table_settings: any;

    subjects: ISubject[] = [];

    constructor(private _subject: SubjectService, private _toast: ToastService) { }

    ngOnInit() {
        this.table_settings = DashboardConstants.TABLE_SETTINGS_SUBJECT;
        this.setAllSubjects();
    }

    setAllSubjects() {
        this._subject.getAllSubjects().subscribe((data: ISubject[]) => {
            this.subjects = data;
            this.data_loading = false;
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }

    onEditConfirm(event): void {
        console.log(event);
        // todo:
        // edit subject with newData
    }

    onCreateConfirm(event) {
        console.log(event);
    }
}
