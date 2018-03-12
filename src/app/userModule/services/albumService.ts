import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiRouteGenerator} from '../../appRoutingModule/apiRouteGenerator';
import {Album, AlbumParameters} from '../models/album';
import {UserService} from "./userService";
import {PhotoService} from "./photoService";
import {User} from "../models/user";
import {Photo} from "../models/photo";
import {randomDateInCurrentYear} from "../Utils/dateUtils";

@Injectable()
export class AlbumService {
    constructor(private http: HttpClient,
                private apiRouteGenerator: ApiRouteGenerator,
                private userService: UserService,
                private photoService: PhotoService) {
    }

    getAllAlbums(): Promise<Album[]> {
        return this.http.request('get', this.apiRouteGenerator.generate('album_list')).toPromise()
            .then((r: AlbumParameters[]) => {
                return r.map((albumParameter: AlbumParameters) => {
                    albumParameter.createdAt = randomDateInCurrentYear().getTime(); // <= Random Date Only for moment integration feature
                    return new Album(albumParameter);
                });
            });
    }

    getAlbumDetails(album: Album): Promise<Album> {
        return Promise.all([
            this.userService.getUser(album.userId),
            this.photoService.getAlbumPhotos(album.id)
        ]).then((results: any[]) => {
            album.user = <User> results[0];
            album.photos = <Photo[]> results[1];

            return album;
        });
    }
}
