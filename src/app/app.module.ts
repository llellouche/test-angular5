import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './appRoutingModule/appRouting.module';
import {RouterModule} from '@angular/router';
import {NotFoundPageComponent} from './appRoutingModule/notFoundPage.component';
import {LandingModule} from './landingModule/landing.module';
import {LandingPageComponent} from './landingModule/landingPage.component';


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
