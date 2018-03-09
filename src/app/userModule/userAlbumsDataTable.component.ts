import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {UserAlbumDetailsModalComponent} from "./userAlbumDetailsModal.component";
import {Album} from "./models/album";
import {DatatableComponent} from "@swimlane/ngx-datatable";

@Component({
    selector: 'app-data-table',
    templateUrl: './userAlbumsDataTable.component.html',
    styleUrls: ['./userAlbumsDataTable.component.scss']
})
export class UserAlbumDataTableComponent implements OnChanges{

    @Input() userAlbums: Album[];
    @Input() userAlbumsFiltered: Album[];
    @ViewChild(UserAlbumDetailsModalComponent) userAlbumsDetailsModal: UserAlbumDetailsModalComponent;
    @ViewChild(DatatableComponent) table: DatatableComponent;
    public currentAlbumSelected: Album;
    public filter: string;
    public columns = [
        {prop: 'id', name: 'Identifiant'},
        {prop: 'title', name: 'Titre'}
    ];

    ngOnChanges(changes: SimpleChanges): void {
        if (this.userAlbums) {
            this.userAlbumsFiltered = this.userAlbums;
        }
    }

    click(event) {
        if (event.type === 'click') {
            console.log(event.row);
            this.currentAlbumSelected = <Album>event.row;
            this.userAlbumsDetailsModal.showChildModal();
        }
    }

    updateFilter() {
        // filter our data
        this.userAlbumsFiltered = this.userAlbums.filter( (album: Album) => {
            return album.title.toLowerCase().indexOf(this.filter) !== -1 || !this.filter;
        });

        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

}
