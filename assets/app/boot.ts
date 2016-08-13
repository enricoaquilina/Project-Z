/// <reference path="../../typings.d.ts" />

import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {appRouterProviders} from './app.routes';
import {ErrorService} from './errors/error.service';
import {AuthService} from './auth/auth.service';
import {HubService} from './hubs/hub.service';
import {UserService} from './auth/user.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [
    ErrorService, HubService, 
    HTTP_PROVIDERS, AuthService,
    UserService,
    ROUTER_DIRECTIVES, appRouterProviders,
    disableDeprecatedForms(), provideForms(),
    provide(LocationStrategy, {useClass:HashLocationStrategy})
])
.catch((err: any) => console.error(err));