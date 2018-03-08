import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from './notFoundPage.component';
import {LandingPageComponent} from '../LandingModule/landingPage.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
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
    providers: []
})
export class AppRoutingModule {

}
