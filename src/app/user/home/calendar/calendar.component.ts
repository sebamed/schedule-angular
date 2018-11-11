import { Component, OnInit } from '@angular/core';
import { ICalendarCell } from 'src/app/common/model/calendar-cell.model';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { SubjectService } from 'src/app/common/services/subject.service';
import { ISubject } from 'src/app/common/model/subject.model';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { ToastService } from 'src/app/common/services/toast.service';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { ICourse } from 'src/app/common/model/course.model';
import { ICalendarDay } from 'src/app/common/model/calendar-day.model';
import { ILesson } from 'src/app/common/model/lesson.model';
import { LessonService } from 'src/app/common/services/lesson.service';
import { formatDate, DatePipe } from '@angular/common';

@Component({
    selector: 'app-user-home-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [DatePipe]
})

export class CalendarComponent implements OnInit {

    LIST_IDS: any[] = [];

    subjects: ISubject[] = [];
    transfered: ISubject[] = [];

    data_loading: Boolean = true;

    // calendar: ICalendarCell[] = [];

    calendar: ICalendarDay[] = [];

    lessons: ILesson[] = [];

    constructor(private _subject: SubjectService,
        private _toast: ToastService,
        private _lesson: LessonService, private _date: DatePipe) {
    }

    ngOnInit() {
        this.setAllLessons();
        this.setSubjects();
    }

    setAllLessons() {
        this._lesson.getAll().subscribe((data: ILesson[]) => {
            this.lessons = data;
            this.setCalendar(this.lessons);
        });
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

    addId(i, j) {
        this.LIST_IDS.push('cdk-drop-list-' + i + '' + j);
        return i + '' + j;
    }

    drop(event: CdkDragDrop<any[]>, a, b) {
        console.log(event);
        console.log(a)
        console.log(b)
        // if (event.previousContainer !== event.container) {
        //     let lesson = null as ILes
        //     transferArrayItem(event.previousContainer.data,
        //         event.container.data,
        //         event.previousIndex,
        //         event.currentIndex);
        // }
    }

    // todo: refaktorisi kad skontas drag n drop
    setCalendar(lessons: ILesson[]) {
        for (let i = 0; i < AppConstants.CALENDAR_SHOW_DAYS; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            const appointments = [];
            for (let j = 0; j < AppConstants.CALENDAR_SHOW_HOURS; j++) {
                appointments.push({
                    time: {
                        hours: 11 + j,
                        minutes: 0
                    },
                    lessons: []
                });
            }
            this.calendar.push({
                date: date,
                appointments: appointments,
            });
        }

        // dodaje lessone u kalendar po datumu i vremenu
        this.calendar.forEach(cal => {
            this.lessons.forEach(lesson => {
                if (lesson.date.toString() === this.transformDate(cal.date, 'yyyy-MM-dd')) {
                    cal.appointments.forEach(appointment => {
                        if (lesson.time.toString().split(':')[0] ===
                            (appointment.time.hours.toString())) {
                            appointment.lessons.push(lesson);
                        }
                    });
                }
            });
        });
    }

    transformDate(date: Date, format: string) {
        return this._date.transform(date, format);
    }

}
