import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiRouteGenerator} from '../../appRoutingModule/apiRouteGenerator';
import {Photo, PhotoParameters} from '../models/photo';

@Injectable()
export class PhotoService {
    constructor(private http: HttpClient,
                private apiRouteGenerator: ApiRouteGenerator) {
    }

    getAlbumPhotos(albumId: number): Promise<Photo[]> {
        return this.http.request('get', this.apiRouteGenerator.generate('album_photos', {},
            {
            albumId: albumId
        })).toPromise().then((r: PhotoParameters[]) => {
            return r.map((photoParameter: PhotoParameters) => new Photo(photoParameter));
        });
    }

}
