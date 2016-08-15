"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var app_routes_1 = require('./app.routes');
var auth_service_1 = require('./auth/auth.service');
var user_service_1 = require('./auth/user.service');
var error_service_1 = require('./errors/error.service');
var hub_service_1 = require('./hubs/hub.service');
var app_component_1 = require('./app.component');
var user_list_component_1 = require('./auth/admin/user-list.component');
var user_update_component_1 = require('./auth/admin/user-update.component');
var user_component_1 = require('./auth/admin/user.component');
var logout_component_1 = require('./auth/logout/logout.component');
var profile_update_component_1 = require('./auth/profile/profile-update.component');
var signin_component_1 = require('./auth/signin/signin.component');
var signup_component_1 = require('./auth/signup/signup.component');
var error_component_1 = require('./errors/error.component');
var hub_form_component_1 = require('./hubs/hub-form.component');
var hub_list_component_1 = require('./hubs/hub-list.component');
var hub_update_component_1 = require('./hubs/hub-update.component');
var hub_component_1 = require('./hubs/hub.component');
var forms_2 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.ROUTING, http_1.HttpModule, forms_2.FormsModule, forms_2.ReactiveFormsModule],
            declarations: [
                app_component_1.AppComponent, user_list_component_1.UserListComponent, user_update_component_1.UserUpdateComponent,
                user_component_1.UserComponent, logout_component_1.LogoutComponent, profile_update_component_1.ProfileUpdateComponent,
                signin_component_1.SigninComponent, signup_component_1.SignupComponent, error_component_1.ErrorComponent,
                hub_form_component_1.HubFormComponent, hub_list_component_1.HubListComponent, hub_update_component_1.HubUpdateComponent,
                hub_component_1.HubComponent
            ],
            providers: [
                auth_service_1.AuthService, user_service_1.UserService, error_service_1.ErrorService,
                hub_service_1.HubService, forms_1.disableDeprecatedForms(), forms_1.provideForms(),
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsaUNBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsc0JBQW1ELGdCQUFnQixDQUFDLENBQUE7QUFDcEUsdUJBQXFELGlCQUFpQixDQUFDLENBQUE7QUFFdkUsMkJBQXNCLGNBQWMsQ0FBQyxDQUFBO0FBRXJDLDZCQUEwQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2hELDZCQUEwQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2hELDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDRCQUF5QixvQkFBb0IsQ0FBQyxDQUFBO0FBRTlDLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLG9DQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ25FLHNDQUFrQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3ZFLCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELGlDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELHlDQUFxQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQy9FLGlDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELGlDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRS9ELGdDQUE2QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hELG1DQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNELG1DQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNELHFDQUFpQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9ELDhCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBRWxELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBbUJsRTtJQUFBO0lBRUEsQ0FBQztJQW5CRDtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsb0JBQU8sRUFBRSxpQkFBVSxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CLENBQUM7WUFDL0UsWUFBWSxFQUFFO2dCQUNWLDRCQUFZLEVBQUUsdUNBQWlCLEVBQUUsMkNBQW1CO2dCQUNwRCw4QkFBYSxFQUFFLGtDQUFlLEVBQUUsaURBQXNCO2dCQUN0RCxrQ0FBZSxFQUFFLGtDQUFlLEVBQUUsZ0NBQWM7Z0JBQ2hELHFDQUFnQixFQUFFLHFDQUFnQixFQUFFLHlDQUFrQjtnQkFDdEQsNEJBQVk7YUFFZjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVyxFQUFFLDBCQUFXLEVBQUUsNEJBQVk7Z0JBQ3RDLHdCQUFVLEVBQUUsOEJBQXNCLEVBQUUsRUFBRSxvQkFBWSxFQUFFO2dCQUNwRCxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUMsNkJBQW9CLEVBQUMsQ0FBQzthQUM3RDtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDNUIsQ0FBQzs7aUJBQUE7SUFHRixnQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksaUJBQVMsWUFFckIsQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7TmdNb2R1bGUsIHByb3ZpZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7ZGlzYWJsZURlcHJlY2F0ZWRGb3JtcywgcHJvdmlkZUZvcm1zfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1JPVVRJTkd9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5cbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi9hdXRoL3VzZXIuc2VydmljZSc7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge0h1YlNlcnZpY2V9IGZyb20gJy4vaHVicy9odWIuc2VydmljZSc7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5pbXBvcnQge1VzZXJMaXN0Q29tcG9uZW50fSBmcm9tICcuL2F1dGgvYWRtaW4vdXNlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1VzZXJVcGRhdGVDb21wb25lbnR9IGZyb20gJy4vYXV0aC9hZG1pbi91c2VyLXVwZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2VyQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYWRtaW4vdXNlci5jb21wb25lbnQnO1xuXG5pbXBvcnQge0xvZ291dENvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2xvZ291dC9sb2dvdXQuY29tcG9uZW50JztcbmltcG9ydCB7UHJvZmlsZVVwZGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9hdXRoL3Byb2ZpbGUvcHJvZmlsZS11cGRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gJy4vYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7RXJyb3JDb21wb25lbnR9IGZyb20gJy4vZXJyb3JzL2Vycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQge0h1YkZvcm1Db21wb25lbnR9IGZyb20gJy4vaHVicy9odWItZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtIdWJMaXN0Q29tcG9uZW50fSBmcm9tICcuL2h1YnMvaHViLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7SHViVXBkYXRlQ29tcG9uZW50fSBmcm9tICcuL2h1YnMvaHViLXVwZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtIdWJDb21wb25lbnR9IGZyb20gJy4vaHVicy9odWIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbiBcbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIFJPVVRJTkcsIEh0dHBNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LCBVc2VyTGlzdENvbXBvbmVudCwgVXNlclVwZGF0ZUNvbXBvbmVudCxcbiAgICAgICAgVXNlckNvbXBvbmVudCwgTG9nb3V0Q29tcG9uZW50LCBQcm9maWxlVXBkYXRlQ29tcG9uZW50LCBcbiAgICAgICAgU2lnbmluQ29tcG9uZW50LCBTaWdudXBDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LFxuICAgICAgICBIdWJGb3JtQ29tcG9uZW50LCBIdWJMaXN0Q29tcG9uZW50LCBIdWJVcGRhdGVDb21wb25lbnQsXG4gICAgICAgIEh1YkNvbXBvbmVudFxuICAgICAgICAvLyBGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1dGhTZXJ2aWNlLCBVc2VyU2VydmljZSwgRXJyb3JTZXJ2aWNlLCBcbiAgICAgICAgSHViU2VydmljZSwgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcygpLCBwcm92aWRlRm9ybXMoKSxcbiAgICAgICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6SGFzaExvY2F0aW9uU3RyYXRlZ3l9KVxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
