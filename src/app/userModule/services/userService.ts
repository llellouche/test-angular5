import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiRouteGenerator} from '../../appRoutingModule/apiRouteGenerator';
import {User, UserParameters} from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient,
                private apiRouteGenerator: ApiRouteGenerator) {
    }

    getUser(userId: number): Promise<User> {
        return this.http.request('get', this.apiRouteGenerator.generate('user_info', {
            userId: userId
        })).toPromise().then((userParameters: UserParameters) => new User(userParameters));
    }

}
