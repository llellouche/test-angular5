import { TestBed, async } from '@angular/core/testing';
import {LandingPageComponent} from './landingPage.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('LandingPageComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                LandingPageComponent
            ]
        }).compileComponents();
    }));
    it('should create the landing page', async(() => {
        const fixture = TestBed.createComponent(LandingPageComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'Moovone'`, async(() => {
        const fixture = TestBed.createComponent(LandingPageComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Moovone');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(LandingPageComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to Moovone !');
    }));
    it('should have datatable page link', async(() => {
        const fixture = TestBed.createComponent(LandingPageComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a').textContent).toContain('Accéder au Datatable');
    }));
});
