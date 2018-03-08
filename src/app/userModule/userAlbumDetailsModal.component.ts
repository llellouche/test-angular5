import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {Album} from "./models/album";
import {AlbumService} from "./services/albumService";

@Component({
    selector: 'app-album-modal',
    templateUrl: './userAlbumDetailsModal.component.html'
})
export class UserAlbumDetailsModalComponent implements OnChanges {
    constructor(private albumService: AlbumService) {
    }

    @Input() album: Album;
    @ViewChild('modal') modal: ModalDirective;

    ngOnChanges(changes: SimpleChanges): void {
        if (this.album) {
            this.albumService.getAlbumDetails(this.album).then((album: Album) => {
                this.album = album;
            });
        }
    }

    showChildModal(): void {
        this.modal.show();
    }

    hideChildModal(): void {
        this.modal.hide();
    }
}
