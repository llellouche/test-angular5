import {NgModule} from '@angular/core';
import {PhotoService} from "./services/photoService";
import {AlbumService} from './services/albumService';
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
