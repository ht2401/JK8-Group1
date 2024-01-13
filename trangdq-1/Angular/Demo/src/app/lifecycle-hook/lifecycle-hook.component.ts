import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-lifecycle-hook',
    templateUrl: './lifecycle-hook.component.html',
    styleUrls: ['./lifecycle-hook.component.scss']
})
export class LifecycleHookComponent implements OnChanges {
    @Input('total') total : number = 0;

    constructor() { }

    ngOnChanges(simpleChange : SimpleChanges) {
        console.log('ngOnChanges : LifecycleHookComponent');
        console.log(simpleChange);
    }
}

