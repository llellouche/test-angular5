import {Component, Input, ViewChild} from '@angular/core';
import {UserAlbumDetailsModalComponent} from "./userAlbumDetailsModal.component";
import {Album} from "./models/album";

@Component({
    selector: 'app-data-table',
    templateUrl: './userAlbumsDataTable.component.html'
})
export class UserAlbumDataTableComponent {
    @Input() userAlbums: any[];
    @ViewChild(UserAlbumDetailsModalComponent) userAlbumsDetailsModal: UserAlbumDetailsModalComponent;
    public currentAlbumSelected: Album;
    public columns = [
        { prop: 'id', name: 'Identifiant' },
        { prop: 'title', name: 'Titre' }
    ];

    click(event) {
        if (event.type === 'click') {
            console.log(event.row);
            this.currentAlbumSelected = <Album>event.row;
            this.userAlbumsDetailsModal.showChildModal();
        }
    }
}
