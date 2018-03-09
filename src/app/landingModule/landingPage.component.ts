import { Component } from '@angular/core';

@Component({
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent {
    public title: string;

    constructor() {
        this.title = 'Moovone';
    }
}
