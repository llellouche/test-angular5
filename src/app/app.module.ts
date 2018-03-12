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
import {CarouselModule, ModalModule} from "ngx-bootstrap";
import {AlbumPhotosSlideshowComponent} from "./userModule/albumPhotosSlideshow.component";
import {FormsModule} from "@angular/forms";
import {TimeAgoPipe} from "time-ago-pipe";


@NgModule({
    declarations: [
        AppComponent,
        NotFoundPageComponent,
        LandingPageComponent,
        UserAlbumsPageComponent,
        UserAlbumDataTableComponent,
        UserAlbumDetailsModalComponent,
        AlbumPhotosSlideshowComponent,
        TimeAgoPipe
    ],
    imports: [
        RouterModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        LandingModule,
        UserModule,
        NgxDatatableModule,
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
        FormsModule
    ],
    exports: [
        NotFoundPageComponent,
        LandingPageComponent,
        UserAlbumsPageComponent,
        UserAlbumDataTableComponent,
        UserAlbumDetailsModalComponent,
        AlbumPhotosSlideshowComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
