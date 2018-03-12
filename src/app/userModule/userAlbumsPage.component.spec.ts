import { TestBed, async } from '@angular/core/testing';
import {UserAlbumDataTableComponent} from './userAlbumsDataTable.component';
import {FormsModule} from '@angular/forms';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {UserAlbumDetailsModalComponent} from './userAlbumDetailsModal.component';
import {UserAlbumsPageComponent} from './userAlbumsPage.component';
import {AlbumPhotosSlideshowComponent} from './albumPhotosSlideshow.component';
import {CarouselModule, ModalModule} from 'ngx-bootstrap';
import {PhotoService} from './services/photoService';
import {UserService} from './services/userService';
import {AlbumService} from './services/albumService';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiRouteGenerator} from '../appRoutingModule/apiRouteGenerator';
import {TimeAgoPipe} from 'time-ago-pipe';
import {randomDate, randomDateInCurrentYear} from '../utils/dateUtils';

describe('UserAlbumsPageComponent', () => {
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
                UserAlbumsPageComponent,
                UserAlbumDataTableComponent,
                UserAlbumDetailsModalComponent,
                AlbumPhotosSlideshowComponent,
                TimeAgoPipe
            ],
        }).compileComponents();
    }));
    it('should create the Albums page', async(() => {
        const fixture = TestBed.createComponent(UserAlbumsPageComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
        app.ngOnInit();
    }));
    it('Check Random Album Date Generation', async(() => {
        const date = new Date();
        const randDate = randomDate(date, date);
        expect(randDate.getTime()).toEqual(date.getTime());

        const firstDayOfYear = new Date((new Date()).getFullYear(), 0, 1);
        const randomDateCurrentYear = randomDateInCurrentYear();
        expect(randomDateCurrentYear).toBeGreaterThanOrEqual(firstDayOfYear.getTime());

    }));
});
