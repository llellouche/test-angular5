export interface AlbumParameters {
    id?: number;
    userId?: number;
    title?: string;
}

export class Album {
    private _id: number;
    private _userId: number;
    private _title: string;

    constructor(parameters: AlbumParameters) {
        this._id = parameters.id ? parameters.id : null;
        this._userId = parameters.id ? parameters.id : null;
        this._title = parameters.title;
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
}
