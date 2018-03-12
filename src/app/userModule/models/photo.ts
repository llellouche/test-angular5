export interface PhotoParameters {
    id?: number;
    albumId?: number;
    title?: string;
    url?: string;
    thumbnailUrl: string;
}

export class Photo {
    private _id: number;
    private _albumId: number;
    private _title: string;
    private _url: string;
    private _thumbnailUrl: string;

    constructor(parameters: PhotoParameters) {
        this._id = parameters.id ? parameters.id : null;
        this._albumId = parameters.albumId;
        this._title = parameters.title;
        this._url = parameters.url;
        this._thumbnailUrl = parameters.thumbnailUrl;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get albumId(): number {
        return this._albumId;
    }

    set albumId(value: number) {
        this._albumId = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get thumbnailUrl(): string {
        return this._thumbnailUrl;
    }

    set thumbnailUrl(value: string) {
        this._thumbnailUrl = value;
    }
}
