import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './appRoutingModule/appRouting.module';
import {RouterModule} from '@angular/router';
import {NotFoundPageComponent} from './appRoutingModule/notFoundPage.component';
import {LandingModule} from './landingModule/landing.module';
import {LandingPageComponent} from './landingModule/landingPage.component';
import {UserAlbumsPageComponent} from './userModule/userAlbumsPage.component';
import {UserModule} from './userModule/user.module';
import {UserAlbumDataTableComponent} from './userModule/userAlbumsDataTable.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {UserAlbumDetailsModalComponent} from "./userModule/userAlbumDetailsModal.component";
import {ModalModule} from "ngx-bootstrap";


@NgModule({
    declarations: [
        AppComponent,
        NotFoundPageComponent,
        LandingPageComponent,
        UserAlbumsPageComponent,
        UserAlbumDataTableComponent,
        UserAlbumDetailsModalComponent,
    ],
    imports: [
        RouterModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        LandingModule,
        UserModule,
        NgxDatatableModule,
        [ModalModule.forRoot()]
    ],
    exports: [
        NotFoundPageComponent,
        LandingPageComponent,
        UserAlbumsPageComponent,
        UserAlbumDetailsModalComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
