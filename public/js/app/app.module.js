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
var hub_main_component_1 = require('./hubs/hub-main.component');
var hub_message_component_1 = require('./hubs/hub-message.component');
var hub_update_component_1 = require('./hubs/hub-update.component');
var hub_component_1 = require('./hubs/hub.component');
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.ROUTING, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                app_component_1.AppComponent, user_list_component_1.UserListComponent, user_update_component_1.UserUpdateComponent,
                user_component_1.UserComponent, logout_component_1.LogoutComponent, profile_update_component_1.ProfileUpdateComponent,
                signin_component_1.SigninComponent, signup_component_1.SignupComponent, error_component_1.ErrorComponent,
                hub_form_component_1.HubFormComponent, hub_list_component_1.HubListComponent, hub_main_component_1.HubMainComponent,
                hub_message_component_1.HubMessageComponent, hub_update_component_1.HubUpdateComponent, hub_component_1.HubComponent
            ],
            providers: [auth_service_1.AuthService, user_service_1.UserService, error_service_1.ErrorService,
                hub_service_1.HubService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsaUNBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsdUJBQXFELGlCQUFpQixDQUFDLENBQUE7QUFFdkUsMkJBQXNCLGNBQWMsQ0FBQyxDQUFBO0FBRXJDLDZCQUEwQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2hELDZCQUEwQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2hELDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDRCQUF5QixvQkFBb0IsQ0FBQyxDQUFBO0FBRTlDLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLG9DQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ25FLHNDQUFrQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3ZFLCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELGlDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELHlDQUFxQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQy9FLGlDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELGlDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRS9ELGdDQUE2QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hELG1DQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNELG1DQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNELG1DQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNELHNDQUFrQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2pFLHFDQUFpQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9ELDhCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBRWxELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBa0JsRTtJQUFBO0lBRUEsQ0FBQztJQWxCRDtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsb0JBQU8sRUFBRSxpQkFBVSxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CLENBQUM7WUFDL0UsWUFBWSxFQUFFO2dCQUNWLDRCQUFZLEVBQUUsdUNBQWlCLEVBQUUsMkNBQW1CO2dCQUNwRCw4QkFBYSxFQUFFLGtDQUFlLEVBQUUsaURBQXNCO2dCQUN0RCxrQ0FBZSxFQUFFLGtDQUFlLEVBQUUsZ0NBQWM7Z0JBQ2hELHFDQUFnQixFQUFFLHFDQUFnQixFQUFFLHFDQUFnQjtnQkFDcEQsMkNBQW1CLEVBQUUseUNBQWtCLEVBQUUsNEJBQVk7YUFFeEQ7WUFDRCxTQUFTLEVBQUUsQ0FBRSwwQkFBVyxFQUFFLDBCQUFXLEVBQUUsNEJBQVk7Z0JBQ3RDLHdCQUFVO2dCQUNWLEVBQUMsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBQzthQUM1RDtZQUNaLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDNUIsQ0FBQzs7aUJBQUE7SUFHRixnQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksaUJBQVMsWUFFckIsQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7Uk9VVElOR30gZnJvbSAnLi9hcHAucm91dGVzJztcblxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL2F1dGgvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7SHViU2VydmljZX0gZnJvbSAnLi9odWJzL2h1Yi5zZXJ2aWNlJztcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7VXNlckxpc3RDb21wb25lbnR9IGZyb20gJy4vYXV0aC9hZG1pbi91c2VyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7VXNlclVwZGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2FkbWluL3VzZXItdXBkYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1VzZXJDb21wb25lbnR9IGZyb20gJy4vYXV0aC9hZG1pbi91c2VyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tICcuL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm9maWxlVXBkYXRlQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvcHJvZmlsZS9wcm9maWxlLXVwZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gJy4vYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSAnLi9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcblxuaW1wb3J0IHtFcnJvckNvbXBvbmVudH0gZnJvbSAnLi9lcnJvcnMvZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7SHViRm9ybUNvbXBvbmVudH0gZnJvbSAnLi9odWJzL2h1Yi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge0h1Ykxpc3RDb21wb25lbnR9IGZyb20gJy4vaHVicy9odWItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtIdWJNYWluQ29tcG9uZW50fSBmcm9tICcuL2h1YnMvaHViLW1haW4uY29tcG9uZW50JztcbmltcG9ydCB7SHViTWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9odWJzL2h1Yi1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge0h1YlVwZGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9odWJzL2h1Yi11cGRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7SHViQ29tcG9uZW50fSBmcm9tICcuL2h1YnMvaHViLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG4gXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBST1VUSU5HLCBIdHRwTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCwgVXNlckxpc3RDb21wb25lbnQsIFVzZXJVcGRhdGVDb21wb25lbnQsXG4gICAgICAgIFVzZXJDb21wb25lbnQsIExvZ291dENvbXBvbmVudCwgUHJvZmlsZVVwZGF0ZUNvbXBvbmVudCwgXG4gICAgICAgIFNpZ25pbkNvbXBvbmVudCwgU2lnbnVwQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudCxcbiAgICAgICAgSHViRm9ybUNvbXBvbmVudCwgSHViTGlzdENvbXBvbmVudCwgSHViTWFpbkNvbXBvbmVudCxcbiAgICAgICAgSHViTWVzc2FnZUNvbXBvbmVudCwgSHViVXBkYXRlQ29tcG9uZW50LCBIdWJDb21wb25lbnRcbiAgICAgICAgLy8gRk9STV9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNcbiAgICBdLFxuICAgIHByb3ZpZGVyczogWyBBdXRoU2VydmljZSwgVXNlclNlcnZpY2UsIEVycm9yU2VydmljZSwgXG4gICAgICAgICAgICAgICAgIEh1YlNlcnZpY2UsIFxuICAgICAgICAgICAgICAgICB7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fVxuICAgICAgICAgICAgICAgXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
