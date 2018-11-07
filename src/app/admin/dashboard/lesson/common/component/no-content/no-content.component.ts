import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-admin-dashboard-lesson-no-content',
    templateUrl: './no-content.component.html',
    styleUrls: ['./no-content.component.scss']
})

export class NoContentComponent implements OnInit {

    @Input() message: string;

    constructor() { }

    ngOnInit() { }
}
