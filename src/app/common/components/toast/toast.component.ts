import { Component, OnInit } from '@angular/core';
import { IToast } from '../../model/toast.model';
import { Subscription } from 'rxjs';
import { ToastService } from '../../services/toast.service';
import { trigger, transition, animate, style } from '@angular/animations'



@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    animations: [
        trigger('toastInOut', [
            transition(':enter', [
                style({ transform: 'translate(-50%, -100%)' }),
                animate('150ms ease-in', style({ transform: 'translate(-50%, 0%)' }))
            ]),
            transition(':leave', [
                animate('100ms ease-in', style({ transform: 'translate(-50%, -100%)', opacity: '0' }))
            ])
        ])
    ]
})

export class ToastComponent implements OnInit {

    toasts: IToast[] = [];

    toastsUpdated: Subscription;

    constructor(private _toast: ToastService) { }

    ngOnInit() {
        this.toastsUpdated = this._toast.toastsEmitter.subscribe(toasts => {
            this.toasts = toasts;
        });
    }

    exit() {
        this._toast.removeToast();
    }
}
