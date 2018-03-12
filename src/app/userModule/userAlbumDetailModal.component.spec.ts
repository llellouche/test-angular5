import { TestBed, async } from '@angular/core/testing';
import {UserAlbumDetailsModalComponent} from './userAlbumDetailsModal.component';
import {AlbumPhotosSlideshowComponent} from './albumPhotosSlideshow.component';
import {CarouselModule, ModalModule} from 'ngx-bootstrap';
import {PhotoService} from './services/photoService';
import {UserService} from './services/userService';
import {AlbumService} from './services/albumService';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiRouteGenerator} from '../appRoutingModule/apiRouteGenerator';
import {Album, AlbumParameters} from './models/album';
import {SimpleChange} from '@angular/core';
import {User, UserParameters} from './models/user';
import {TimeAgoPipe} from 'time-ago-pipe';

describe('UserAlbumDetailsModalComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                AlbumService,
                PhotoService,
                UserService,
                ApiRouteGenerator
            ],
            imports: [
                HttpClientTestingModule,
                ModalModule.forRoot(),
                CarouselModule.forRoot()
            ],
            declarations: [
                UserAlbumDetailsModalComponent,
                AlbumPhotosSlideshowComponent,
                TimeAgoPipe
            ],
        }).compileComponents();
    }));
    it('should create the Album detail modal', async(() => {
        const fixture = TestBed.createComponent(UserAlbumDetailsModalComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
        app.ngOnChanges(new SimpleChange(null, null, null));
        setTimeout(function() {
            app.showChildModal();
            app.hideChildModal();
        }, 3000);
    }));
    it('Set Albums Details', async(() => {
        const fixture = TestBed.createComponent(UserAlbumDetailsModalComponent);
        const app = fixture.debugElement.componentInstance;

        // Set User With UserParameters
        const userFullParam: User = new User(<UserParameters>{
            id: 1,
            name: 'name',
            username: 'username',
            email: 'email@domain.com',
            phone: '0102030405',
            website: 'http://website.fr'
        });

        // Set User With setters
        let user: User = new User(<UserParameters>{});
        user.id = 1;
        user.name = 'name';
        user.username = 'username';
        user.email = 'email@domain.com';
        user.phone = '0102030405'
        user.website = 'http://website.fr';

        // Set Album With UserParameters
        const albumFullParam: Album = new Album(<AlbumParameters>{
            id: 1,
            userId: 1,
            title: 'title',
            user: user,
            createdAt: 1520892682298
        });

        // Set Album With setters
        let album: Album = new Album(<AlbumParameters>{});
        album.id = 25;
        album.title = 'Title';
        album.user = user;
        album.userId = 1;
        album.createdAt = new Date();
        app.album = album;
        app.ngOnChanges(new SimpleChange(null, null, null));
    }));
});
