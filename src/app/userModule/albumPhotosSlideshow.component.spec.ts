import { TestBed, async } from '@angular/core/testing';
import {AlbumPhotosSlideshowComponent} from './albumPhotosSlideshow.component';
import {CarouselModule} from 'ngx-bootstrap';
import {Photo, PhotoParameters} from './models/photo';

describe('AlbumPhotosSlideshowComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CarouselModule.forRoot()
            ],
            declarations: [
                AlbumPhotosSlideshowComponent
            ],
        }).compileComponents();
    }));
    it('should create the Album photos slide show', async(() => {
        const fixture = TestBed.createComponent(AlbumPhotosSlideshowComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('Set Photos', async(() => {
        const fixture = TestBed.createComponent(AlbumPhotosSlideshowComponent);
        const app = fixture.debugElement.componentInstance;

        // Set Photo With setters
        let photoFullParam: Photo = new Photo(<PhotoParameters>{
            id: 1,
            albumId: 1,
            title: 'title',
            url: 'url',
            thumbnailUrl: 'thumbnailUrl'
        });

        // Set Photo With UserParameters
        let photo: Photo = new Photo(<PhotoParameters>{});
        photo.id = 25;
        photo.title = 'Title';
        photo.albumId = 25;
        photo.thumbnailUrl = 'http://thumbnailurl.fr';
        photo.url = 'http://url.fr';
        app.photos = [photo];
    }));
});
