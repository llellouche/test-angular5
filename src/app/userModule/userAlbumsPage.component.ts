import {Component, OnInit} from '@angular/core';
import {AlbumService} from './services/albumService';
import {Album} from './models/album';

@Component({
    templateUrl: './userAlbumsPage.component.html'
})
export class UserAlbumsPageComponent implements OnInit {
    public albums: Album[];
    constructor(private albumService: AlbumService) {
    }

    ngOnInit() {
        this.albumService.getAllAlbums().then((albums: Album[]) => {
            this.albums = albums;
        });
    }
}
