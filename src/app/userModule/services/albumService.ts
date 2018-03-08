import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiRouteGenerator} from '../../appRoutingModule/apiRouteGenerator';
import {Album, AlbumParameters} from '../models/album';

@Injectable()
export class AlbumService {
    constructor(private http: HttpClient,
                private apiRouteGenerator: ApiRouteGenerator) {
    }

    getAllAlbums(): Promise<Album[]> {
        return this.http.request('get', this.apiRouteGenerator.generate('album_list')).toPromise()
            .then((r: AlbumParameters[]) => {
                return r.map((albumParameter: AlbumParameters) => new Album(albumParameter));
            });
    }
}
