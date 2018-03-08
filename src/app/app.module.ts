import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './AppRoutingModule/appRouting.module';
import {RouterModule} from '@angular/router';
import {NotFoundPageComponent} from './AppRoutingModule/notFoundPage.component';
import {LandingModule} from './LandingModule/landing.module';
import {LandingPageComponent} from './LandingModule/landingPage.component';


@NgModule({
    declarations: [
        AppComponent,
        NotFoundPageComponent,
        LandingPageComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        LandingModule,

    ],
    exports: [
        NotFoundPageComponent,
        LandingPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
