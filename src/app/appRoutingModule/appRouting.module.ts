import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from './notFoundPage.component';
import {LandingPageComponent} from '../landingModule/landingPage.component';
import {ApiRouteGenerator} from './apiRouteGenerator';
import {UserAlbumsPageComponent} from '../userModule/userAlbumsPage.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'albums',
        component: UserAlbumsPageComponent
    },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
    providers: [ApiRouteGenerator]
})
export class AppRoutingModule {

}
