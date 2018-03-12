import {Component, Input} from '@angular/core';
import {Photo} from './models/photo';
import {CarouselConfig} from 'ngx-bootstrap';

@Component({
    selector: 'app-photos-slideshow',
    templateUrl: './albumPhotosSlideshow.component.html',
    providers: [
        {provide: CarouselConfig, useValue: {interval: 1500, noPause: true, showIndicators: false}}
    ]
})
export class AlbumPhotosSlideshowComponent {
    @Input() photos: Photo[];
}
