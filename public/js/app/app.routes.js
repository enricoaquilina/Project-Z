"use strict";
// import {provideRouter, RouterConfig} from '@angular/router';
var router_1 = require('@angular/router');
// import {AppComponent} from './app.component';
var signup_component_1 = require('./auth/signup/signup.component');
var signin_component_1 = require('./auth/signin/signin.component');
var hub_list_component_1 = require('./hubs/hub-list.component');
var hub_form_component_1 = require('./hubs/hub-form.component');
var hub_update_component_1 = require('./hubs/hub-update.component');
var logout_component_1 = require('./auth/logout/logout.component');
var user_list_component_1 = require('./auth/admin/user-list.component');
var user_update_component_1 = require('./auth/admin/user-update.component');
var profile_update_component_1 = require('./auth/profile/profile-update.component');
var APP_ROUTES = [
    { path: '', component: hub_list_component_1.HubListComponent },
    { path: 'hub/create', component: hub_form_component_1.HubFormComponent },
    { path: 'hub/update', component: hub_update_component_1.HubUpdateComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'users', component: user_list_component_1.UserListComponent },
    { path: 'user/update', component: user_update_component_1.UserUpdateComponent },
    { path: 'profile', component: profile_update_component_1.ProfileUpdateComponent }
];
exports.ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);
// export const appRouterProviders = [
//     provideRouter(routes)
// ]; 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUErRDtBQUMvRCx1QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQUVyRCxnREFBZ0Q7QUFDaEQsaUNBQThCLGdDQUFnQyxDQUFDLENBQUE7QUFDL0QsaUNBQThCLGdDQUFnQyxDQUFDLENBQUE7QUFDL0QsbUNBQStCLDJCQUEyQixDQUFDLENBQUE7QUFDM0QsbUNBQStCLDJCQUEyQixDQUFDLENBQUE7QUFDM0QscUNBQWlDLDZCQUE2QixDQUFDLENBQUE7QUFDL0QsaUNBQThCLGdDQUFnQyxDQUFDLENBQUE7QUFDL0Qsb0NBQWdDLGtDQUFrQyxDQUFDLENBQUE7QUFDbkUsc0NBQWtDLG9DQUFvQyxDQUFDLENBQUE7QUFDdkUseUNBQXFDLHlDQUF5QyxDQUFDLENBQUE7QUFFL0UsSUFBTSxVQUFVLEdBQVc7SUFDdkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBQztJQUN2QyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFDO0lBQ2pELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUM7SUFDbkQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0lBQzVDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztJQUM1QyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7SUFDNUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBQztJQUM3QyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFDO0lBQ3JELEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUM7Q0FDdkQsQ0FBQztBQUVXLGVBQU8sR0FBRyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4RCxzQ0FBc0M7QUFDdEMsNEJBQTRCO0FBQzVCLEtBQUsiLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7cHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZXMsIFJvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSAnLi9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHtIdWJMaXN0Q29tcG9uZW50fSBmcm9tICcuL2h1YnMvaHViLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7SHViRm9ybUNvbXBvbmVudH0gZnJvbSAnLi9odWJzL2h1Yi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge0h1YlVwZGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9odWJzL2h1Yi11cGRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tICcuL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2VyTGlzdENvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2FkbWluL3VzZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2VyVXBkYXRlQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYWRtaW4vdXNlci11cGRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7UHJvZmlsZVVwZGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9hdXRoL3Byb2ZpbGUvcHJvZmlsZS11cGRhdGUuY29tcG9uZW50JztcblxuY29uc3QgQVBQX1JPVVRFUzogUm91dGVzID0gW1xuICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBIdWJMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJ2h1Yi9jcmVhdGUnLCBjb21wb25lbnQ6IEh1YkZvcm1Db21wb25lbnR9LFxuICAgIHtwYXRoOiAnaHViL3VwZGF0ZScsIGNvbXBvbmVudDogSHViVXBkYXRlQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJ3NpZ251cCcsIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJ3NpZ25pbicsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJ2xvZ291dCcsIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJ3VzZXJzJywgY29tcG9uZW50OiBVc2VyTGlzdENvbXBvbmVudH0sXG4gICAge3BhdGg6ICd1c2VyL3VwZGF0ZScsIGNvbXBvbmVudDogVXNlclVwZGF0ZUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICdwcm9maWxlJywgY29tcG9uZW50OiBQcm9maWxlVXBkYXRlQ29tcG9uZW50fVxuXTtcblxuZXhwb3J0IGNvbnN0IFJPVVRJTkcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChBUFBfUk9VVEVTKTtcbi8vIGV4cG9ydCBjb25zdCBhcHBSb3V0ZXJQcm92aWRlcnMgPSBbXG4vLyAgICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXG4vLyBdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
