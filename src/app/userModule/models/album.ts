import {Photo, PhotoParameters} from "./photo";
import {User, UserParameters} from "./user";

export interface AlbumParameters {
    id?: number;
    userId?: number;
    title?: string;
    photos?: PhotoParameters[];
    user?: UserParameters;
    createdAt?: number;
}

export class Album {
    private _id: number;
    private _userId: number;
    private _title: string;
    private _photos: Photo[];
    private _user: User;
    private _createdAt: Date;

    constructor(parameters: AlbumParameters) {
        this._id = parameters.id ? parameters.id : null;
        this._userId = parameters.userId ? parameters.userId : null;
        this._title = parameters.title;
        this._photos = parameters.photos && parameters.photos.length > 0
            ? parameters.photos.map((photoParameters: PhotoParameters) => new Photo(photoParameters))
            : null;
        this._user = parameters.user ? new User(parameters.user) : null;
        this._createdAt = parameters.createdAt ? new Date(parameters.createdAt) : null;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get photos(): Photo[] {
        return this._photos;
    }

    set photos(value: Photo[]) {
        this._photos = value;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }
}
