import { Component, OnInit } from '@angular/core';
import { ICalendarCell } from 'src/app/common/model/calendar-cell.model';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { SubjectService } from 'src/app/common/services/subject.service';
import { ISubject } from 'src/app/common/model/subject.model';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { ToastService } from 'src/app/common/services/toast.service';

@Component({
    selector: 'app-user-home-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

    subjects: ISubject[] = [];

    data_loading: Boolean = true;

    calendar: ICalendarCell[] = [];

    constructor(private _subject: SubjectService,
        private _toast: ToastService) {
        this.setCalendar();
    }

    ngOnInit() {
        this.setSubjects();
    }

    setSubjects() {
        this._subject.getAllSubjects().subscribe((data: ISubject[]) => {
            this.subjects = data;
            this.data_loading = false;
            console.log(this.subjects);
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
            this.data_loading = false;
        });
    }

    setCalendar() {
        for (let i = 0; i < AppConstants.CALENDAR_SHOW_DAYS; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            const times = [];
            for (let j = 0; j < AppConstants.CALENDAR_SHOW_HOURS; j++) {
                times.push({
                    hours: 11 + j,
                    minutes: 0
                });
            }
            this.calendar.push({
                date: date,
                times: times
            });
        }
    }
}
