/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';
import { BuilderModule } from '@builder.io/angular'; // Import the Builder.io Angular SDK

const API_KEY = "0b40f8c2653041ee8c624e0da406c86c";
const builderModuleProviders = BuilderModule.forRoot(API_KEY)?.providers || [];


bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(), 
    provideRouter(routeConfig),
    // {provide: BuilderModule, useValue: API_KEY}],
    ...builderModuleProviders
  ],
}).catch((err) => console.error(err));
