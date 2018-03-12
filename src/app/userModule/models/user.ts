export interface UserParameters {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    website?: string;
}

export class User {
    private _id: number;
    private _name: string;
    private _username: string;
    private _email: string;
    private _phone: string;
    private _website: string;

    constructor(parameters: UserParameters) {
        this._id = parameters.id ? parameters.id : null;
        this._name = parameters.name;
        this._username = parameters.username;
        this._email = parameters.email;
        this._phone = parameters.phone;
        this._website = parameters.website;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get website(): string {
        return this._website;
    }

    set website(value: string) {
        this._website = value;
    }
}
