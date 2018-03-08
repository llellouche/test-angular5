import {NgModule} from '@angular/core';
import {UserService} from './services/userService';
import {AlbumService} from './services/albumService';

@NgModule({
    providers: [
        AlbumService,
        UserService
    ]
})
export class UserModule {
}
