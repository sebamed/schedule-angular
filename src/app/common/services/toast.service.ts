import { Injectable, EventEmitter } from '@angular/core';
import { IToast } from '../model/toast.model';
import { Observable, Subscription, timer } from 'rxjs';
import { ToastType } from '../model/enumeration/toast-type.enum';

@Injectable()
export class ToastService {

    toasts: IToast[] = [];

    toastsEmitter: EventEmitter<any> = new EventEmitter();

    timer: Observable<any>;
    timerSub: Subscription;

    constructor() { }

    removeToast() {
        this.toasts.pop();
        this.toastsEmitter.emit(this.toasts);
    }

    addErrorToast(msg: string) {
        this.addToast({
            message: msg,
            type: ToastType.error
        });
    }

    addSuccessToast(msg: string) {
        this.addToast({
            message: msg,
            type: ToastType.success
        });
    }

    private addToast(toast: IToast) {
        if (this.toasts.length > 0) {
            this.toasts.pop();
        }
        this.toasts.push(toast);
        this.toastsEmitter.emit(this.toasts);
        this.toastTimer();
    }

    private toastTimer() {
        if (this.timerSub !== undefined) {
            this.timerSub.unsubscribe();
        }
        this.timer = timer(3000);
        this.timerSub = this.timer.subscribe(() => {
            this.toasts.pop();
            this.toastsEmitter.emit(this.toasts);
        });
    }
}
