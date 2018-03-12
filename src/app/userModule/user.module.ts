import {NgModule} from '@angular/core';
import {AlbumService} from './services/albumService';
import {PhotoService} from './services/photoService';
import {UserService} from './services/userService';

@NgModule({
    providers: [
        AlbumService,
        PhotoService,
        UserService
    ]
})
export class UserModule {
}
