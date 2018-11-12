import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICalendarCell } from 'src/app/common/model/calendar-cell.model';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { SubjectService } from 'src/app/common/services/subject.service';
import { ISubject } from 'src/app/common/model/subject.model';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { ToastService } from 'src/app/common/services/toast.service';
import { CdkDragDrop, transferArrayItem, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { ICalendarDay } from 'src/app/common/model/calendar-day.model';
import { LessonService } from 'src/app/common/services/lesson.service';
import { DatePipe, Time } from '@angular/common';
import { IUserInfo } from 'src/app/common/model/user-info.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { ICalendarAppointment } from 'src/app/common/model/calendar-appointment.model';
import { ICalendarDayLesson } from 'src/app/common/model/calendar-day-lesson.model';
import { NbWindowService } from '@nebular/theme';
import { RequestLessonWindowComponent } from './windows/request/request.component';
import { Subscription } from 'rxjs';
import { LessonInfoWindowComponent } from './windows/info/info.component';

@Component({
    selector: 'app-user-home-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [DatePipe]
})

export class CalendarComponent implements OnInit, OnDestroy {

    listener: Subscription;

    LIST_IDS: any[] = [];

    user: IUserInfo;

    requestedLesson: ICalendarDayLesson;

    subjects: ISubject[] = [];
    transfered: ISubject[] = [];

    data_loading: Boolean = true;

    // calendar: ICalendarCell[] = [];

    calendar: ICalendarDay[] = [];

    lessons: ICalendarDayLesson[] = [];

    constructor(private _subject: SubjectService,
        public _window: NbWindowService,
        private _auth: AuthService,
        private _toast: ToastService,
        private _lesson: LessonService,
        private _date: DatePipe) {
    }

    ngOnInit() {
        this.setAllLessons();
        this.setSubjects();
        this.setUser();
        this.emitterListener();
    }

    ngOnDestroy() {
        if (this.listener !== undefined) {
            this.listener.unsubscribe();
        }
    }

    setUser() {
        this.user = this._auth.getUser();
    }

    setAllLessons() {
        this._lesson.getAllCalendarLessons().subscribe((data: ICalendarDayLesson[]) => {
            this.lessons = data;
            this.setCalendar(this.lessons);
        });
    }

    setSubjects() {
        this._subject.getAllSubjects().subscribe((data: ISubject[]) => {
            this.subjects = data;
            this.data_loading = false;
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
            this.data_loading = false;
        });
    }

    addId(i, j) {
        if (j === 0) {
            this.LIST_IDS.push('cdk-drop-list-' + i);
        } else {
            this.LIST_IDS.push('cdk-drop-list-' + j + '' + i);
        }
        return i + '' + j;
    }

    remove(appointment: ICalendarAppointment, lesson: ICalendarDayLesson) {
        appointment.lessons.splice(appointment.lessons.indexOf(lesson), 1);
    }

    drop(event: CdkDragDrop<ISubject[]>, appointment: ICalendarAppointment, date, time) {
        this.requestedLesson = {
            id: null,
            date: date,
            time: time,
            canceled: false,
            confirmed: false,
            new: true,
            course: {
                id: null,
                material: [],
                types: [],
                subject: {
                    id: event.previousContainer.data[event.previousIndex].id,
                    name: event.previousContainer.data[event.previousIndex].name
                }
            }
        };

        appointment.lessons.push(this.requestedLesson);
    }

    // todo: refaktorisi kad skontas drag n drop
    setCalendar(lessons: ICalendarDayLesson[]) {
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

    transformTime(time: Time) {
        if (time.minutes < 1) {
            return time.hours + ':' + time.minutes + '0:00';
        }
        return time.hours + ':' + time.minutes + ':00';
    }

    emitterListener() {
        this.listener = this._lesson.emitter.subscribe(() => {
            this.calendar = [];
            this.setAllLessons();
        });
    }

    openRequestWindow(appointment: ICalendarAppointment, lesson: ICalendarDayLesson) {
        this._window.open(RequestLessonWindowComponent,
            {
                title: 'Request new lesson on ' + lesson.date,
                closeOnBackdropClick: true,
                closeOnEsc: true,
                context: {
                    lesson: {
                        userId: this.user.id,
                        date: lesson.date,
                        time: lesson.time,
                        course: {
                            types: [],
                            material: [],
                            subject: {
                                id: lesson.course.subject.id,
                                name: lesson.course.subject.name
                            }
                        }
                    }
                }
            });
    }

    openInfoWindow(appointment: ICalendarAppointment, lesson: ICalendarDayLesson) {
        this._window.open(LessonInfoWindowComponent,
            {
                title: 'Lesson info',
                closeOnBackdropClick: true,
                closeOnEsc: true,
                context: {
                    id: lesson.id
                }
            });
    }
}
