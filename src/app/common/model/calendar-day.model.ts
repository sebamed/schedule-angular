import { ICalendarAppointment } from './calendar-appointment.model';

export interface ICalendarDay {
    date: Date;
    appointments: ICalendarAppointment[];
}
