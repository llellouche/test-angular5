import {Injectable} from '@angular/core';
import {parameters as parametersConfig} from '../parameters';

class ApiRoute {
    private _name: string;
    private _path: string;
    private _requiredParameters: string[];

    constructor(name: string, path: string) {
        this._name = name;
        this._path = path;
        this._requiredParameters = [];

        path.split('/').forEach(token => {
            if (token.startsWith(':')) {
                this._requiredParameters.push(token.substr(1));
            }
        });
    }

    build(parameters: { [key: string]: any; } = {}): string {
        let generated = this._path;
        this._requiredParameters.forEach(requiredParameter => {
            if (parameters[requiredParameter] == undefined) {
                throw `Missing route parameter '${requiredParameter}'`;
            }
            generated = generated.replace(`:${requiredParameter}`, parameters[requiredParameter]);
        });

        return generated;
    }


    get name(): string {
        return this._name;
    }
}

@Injectable()
export class ApiRouteGenerator {
    private _routes: ApiRoute[];
    private _apiRoutePrefix: string;

    constructor() {
        this._routes = [];
        this._apiRoutePrefix = parametersConfig.apiRoutePrefix;
        this.addRoute(new ApiRoute('album_list', '/albums'));
        this.addRoute(new ApiRoute('album_photos', '/photos'));
        this.addRoute(new ApiRoute('user_info', '/users/:userId'));
    }

    addRoute(route: ApiRoute) {
        this._routes.push(route);
    }

    generate(routeName: string, parameters: { [key: string]: any; } = {}, queryStringParameters: { [key: string]: any; } = {}) {
        let url = this._apiRoutePrefix;
        try {
            let route = this._routes.find(it => it.name == routeName);
            if (!route) {
                throw `route ${routeName} not found`;
            }

             url += route.build(parameters);

            let qsParts: string[] = [];
            for (let p in queryStringParameters) {
                // dont push null|undefined in the query string
                if (queryStringParameters[p] != null) {
                    qsParts.push(`${encodeURIComponent(p)}=${encodeURIComponent(queryStringParameters[p])}`);
                }
            }

            if (qsParts.length > 0) {
                url += '?' + qsParts.join('&');
            }

            return url;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

}
