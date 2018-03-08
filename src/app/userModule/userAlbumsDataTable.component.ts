import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-data-table',
    templateUrl: './userAlbumsDataTable.component.html'
})
export class UserAlbumDataTableComponent {
    @Input() userAlbums: any[];
    public columns = [
        { prop: 'id', name: 'Identifiant' },
        { prop: 'title', name: 'Titre' }
    ];
}
