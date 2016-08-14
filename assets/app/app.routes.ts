import {provideRouter, RouterConfig} from '@angular/router';

// import {AppComponent} from './app.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HubListComponent} from './hubs/hub-list.component';
import {HubFormComponent} from './hubs/hub-form.component';
import {HubUpdateComponent} from './hubs/hub-update.component';
import {LogoutComponent} from './auth/logout/logout.component';
import {UserListComponent} from './auth/admin/user-list.component';
import {UserUpdateComponent} from './auth/admin/user-update.component';
import {ProfileUpdateComponent} from './auth/profile/profile-update.component';

const routes: RouterConfig = [
    {path: '', component: HubListComponent},
    {path: 'hub/create', component: HubFormComponent},
    {path: 'hub/update', component: HubUpdateComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'users', component: UserListComponent},
    {path: 'user/update', component: UserUpdateComponent},
    {path: 'profile', component: ProfileUpdateComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];