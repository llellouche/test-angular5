import {TestBed, async} from '@angular/core/testing';
import {NotFoundPageComponent} from './notFoundPage.component';
import {ApiRouteGenerator} from './apiRouteGenerator';
import {parameters as parametersConfig} from '../parameters';

describe('NotFoundPageComponent And ApiRouteGeneratorRouting', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                ApiRouteGenerator
            ],
            declarations: [
                NotFoundPageComponent
            ],
        }).compileComponents();
    }));
    it('should create Not found page', async(() => {
        const fixture = TestBed.createComponent(NotFoundPageComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should create simple route', async(() => {
        const apiRouteGenerator = TestBed.get(ApiRouteGenerator);
        const route: string = apiRouteGenerator.generate('album_photos');
        expect(route).toEqual(parametersConfig.apiRoutePrefix + '/photos');
    }));
    it('should create parameter route', async(() => {
        const apiRouteGenerator = TestBed.get(ApiRouteGenerator);
        const route = apiRouteGenerator.generate('user_info', {
            userId: 1
        });
        expect(route).toEqual(parametersConfig.apiRoutePrefix + '/users/1');
    }));
    it('should create optionel parameter route', async(() => {
        const apiRouteGenerator = TestBed.get(ApiRouteGenerator);
        const route = apiRouteGenerator.generate('album_photos', {},
        {
            albumId: 1
        });
        expect(route).toEqual(parametersConfig.apiRoutePrefix + '/photos?albumId=1');
    }));
    it('should throw route generate exception', async(() => {
        try {
            const apiRouteGenerator = TestBed.get(ApiRouteGenerator);
            apiRouteGenerator.generate('unknow_route');
        } catch (e) {
            expect(e).toEqual('route unknow_route not found');
        }

    }));
});
