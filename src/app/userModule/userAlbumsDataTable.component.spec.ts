import { TestBed, async } from '@angular/core/testing';
import {UserAlbumDataTableComponent} from './userAlbumsDataTable.component';
import {FormsModule} from '@angular/forms';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {UserAlbumDetailsModalComponent} from './userAlbumDetailsModal.component';
import {AlbumPhotosSlideshowComponent} from './albumPhotosSlideshow.component';
import {CarouselModule, ModalModule} from 'ngx-bootstrap';
import {PhotoService} from './services/photoService';
import {UserService} from './services/userService';
import {AlbumService} from './services/albumService';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiRouteGenerator} from '../appRoutingModule/apiRouteGenerator';
import {SimpleChange} from '@angular/core';
import {Album, AlbumParameters} from './models/album';
import {TimeAgoPipe} from 'time-ago-pipe';


describe('UserAlbumDataTableComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                AlbumService,
                PhotoService,
                UserService,
                ApiRouteGenerator
            ],
            imports: [
                FormsModule,
                HttpClientTestingModule,
                NgxDatatableModule,
                ModalModule.forRoot(),
                CarouselModule.forRoot(),
            ],
            declarations: [
                UserAlbumDataTableComponent,
                UserAlbumDetailsModalComponent,
                AlbumPhotosSlideshowComponent,
                TimeAgoPipe
            ],
        }).compileComponents();
    }));
    it('should create the landing page', async(() => {
        const fixture = TestBed.createComponent(UserAlbumDataTableComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();

        app.ngOnChanges(new SimpleChange(null, null, null));
        app.updateFilter();
        app.click({});

        app.click({type: 'test'});
        setTimeout(function() {
            app.click({type: 'click', row: {id: 1, userId: 1}});
        }, 3000);
    }));
    it('Get Albums From Api Service', async(() => {
        const albumService = TestBed.get(AlbumService);
        albumService.getAllAlbums().then((albums: Album[]) => {
            expect(albums.length).toEqual(100);
            albumService.getAlbumDetails(albums[0]).then((album: Album) => {
                // Check Album data
                expect(album.id).toEqual(1);
                expect(album.title).toEqual('quidem molestiae enim');

                // Check User Album data
                expect(album.user.id).toEqual(1);
                expect(album.user.email).toEqual('Sincere@april.biz');
                expect(album.user.name).toEqual('Leanne Graham');
                expect(album.user.username).toEqual('Bret');
                expect(album.user.phone).toEqual('1-770-736-8031 x56442');
                expect(album.user.website).toEqual('hildegard.org');

                // Check Photos Album data
                expect(album.photos.length).toEqual(50);
                const photo = album.photos[0];
                expect(photo.albumId).toEqual(1);
                expect(photo.id).toEqual(1);
                expect(photo.thumbnailUrl).toEqual('http://placehold.it/150/92c952');
                expect(photo.title).toEqual('accusamus beatae ad facilis cum similique qui sunt');
                expect(photo.url).toEqual('http://placehold.it/600/92c952');
            });
        });
    }));
    it('Set Albums', async(() => {
        const fixture = TestBed.createComponent(UserAlbumDataTableComponent);
        const app = fixture.debugElement.componentInstance;
        let album: Album = new Album(<AlbumParameters>{});
        album.id = 25;
        album.title = 'Title';
        album.userId = 25;
        app.albums = [album];
    }));
    it('Set Albums Filter', async(() => {
        const fixture = TestBed.createComponent(UserAlbumDataTableComponent);
        const app = fixture.debugElement.componentInstance;
        const compiled = fixture.debugElement.nativeElement;
        const albumService = TestBed.get(AlbumService);

        albumService.getAllAlbums().then((albums: Album[]) => {
            app.userAlbums = albums;
            app.filter = 'album';
            app.updateFilter();
            expect(app.userAlbums.length).toEqual(100);
            expect(app.userAlbumsFiltered.length).toEqual(0);
            expect(compiled.querySelector('.page-count').textContent).toContain('0 total');
        });
    }));
});
