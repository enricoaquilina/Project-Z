import {HttpModule} from '@angular/http';
import {NgModule, provide} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTING} from './app.routes';

import {AuthService} from './auth/auth.service';
import {UserService} from './auth/user.service';
import {ErrorService} from './errors/error.service';
import {HubService} from './hubs/hub.service';

import {AppComponent} from './app.component';

import {UserListComponent} from './auth/admin/user-list.component';
import {UserUpdateComponent} from './auth/admin/user-update.component';
import {UserComponent} from './auth/admin/user.component';

import {LogoutComponent} from './auth/logout/logout.component';
import {ProfileUpdateComponent} from './auth/profile/profile-update.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';

import {ErrorComponent} from './errors/error.component';
import {HubFormComponent} from './hubs/hub-form.component';
import {HubListComponent} from './hubs/hub-list.component';
import {HubUpdateComponent} from './hubs/hub-update.component';
import {HubComponent} from './hubs/hub.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
 
@NgModule({
    imports: [BrowserModule, ROUTING, HttpModule, FormsModule, ReactiveFormsModule],
    declarations: [
        AppComponent, UserListComponent, UserUpdateComponent,
        UserComponent, LogoutComponent, ProfileUpdateComponent, 
        SigninComponent, SignupComponent, ErrorComponent,
        HubFormComponent, HubListComponent, HubUpdateComponent,
        HubComponent
        // FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES
    ],
    providers: [
        AuthService, UserService, ErrorService, 
        HubService, disableDeprecatedForms(), provideForms(),
        provide(LocationStrategy, {useClass:HashLocationStrategy})
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}