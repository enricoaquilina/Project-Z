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
var hub_main_component_1 = require('./hubs/hub-main.component');
var hub_message_component_1 = require('./hubs/hub-message.component');
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
                hub_form_component_1.HubFormComponent, hub_list_component_1.HubListComponent, hub_main_component_1.HubMainComponent,
                hub_message_component_1.HubMessageComponent, hub_update_component_1.HubUpdateComponent, hub_component_1.HubComponent
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsaUNBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsc0JBQW1ELGdCQUFnQixDQUFDLENBQUE7QUFDcEUsdUJBQXFELGlCQUFpQixDQUFDLENBQUE7QUFFdkUsMkJBQXNCLGNBQWMsQ0FBQyxDQUFBO0FBRXJDLDZCQUEwQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2hELDZCQUEwQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2hELDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDRCQUF5QixvQkFBb0IsQ0FBQyxDQUFBO0FBRTlDLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLG9DQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ25FLHNDQUFrQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3ZFLCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELGlDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELHlDQUFxQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQy9FLGlDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELGlDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRS9ELGdDQUE2QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hELG1DQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNELG1DQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNELG1DQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNELHNDQUFrQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2pFLHFDQUFpQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9ELDhCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBRWxELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBbUJsRTtJQUFBO0lBRUEsQ0FBQztJQW5CRDtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsb0JBQU8sRUFBRSxpQkFBVSxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CLENBQUM7WUFDL0UsWUFBWSxFQUFFO2dCQUNWLDRCQUFZLEVBQUUsdUNBQWlCLEVBQUUsMkNBQW1CO2dCQUNwRCw4QkFBYSxFQUFFLGtDQUFlLEVBQUUsaURBQXNCO2dCQUN0RCxrQ0FBZSxFQUFFLGtDQUFlLEVBQUUsZ0NBQWM7Z0JBQ2hELHFDQUFnQixFQUFFLHFDQUFnQixFQUFFLHFDQUFnQjtnQkFDcEQsMkNBQW1CLEVBQUUseUNBQWtCLEVBQUUsNEJBQVk7YUFFeEQ7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDRCQUFZO2dCQUN0Qyx3QkFBVSxFQUFFLDhCQUFzQixFQUFFLEVBQUUsb0JBQVksRUFBRTtnQkFDcEQsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFDLDZCQUFvQixFQUFDLENBQUM7YUFDN0Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7O2lCQUFBO0lBR0YsZ0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGlCQUFTLFlBRXJCLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge05nTW9kdWxlLCBwcm92aWRlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge2Rpc2FibGVEZXByZWNhdGVkRm9ybXMsIHByb3ZpZGVGb3Jtc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtST1VUSU5HfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vYXV0aC91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtIdWJTZXJ2aWNlfSBmcm9tICcuL2h1YnMvaHViLnNlcnZpY2UnO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuaW1wb3J0IHtVc2VyTGlzdENvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2FkbWluL3VzZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2VyVXBkYXRlQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYWRtaW4vdXNlci11cGRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7VXNlckNvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2FkbWluL3VzZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHtMb2dvdXRDb21wb25lbnR9IGZyb20gJy4vYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2ZpbGVVcGRhdGVDb21wb25lbnR9IGZyb20gJy4vYXV0aC9wcm9maWxlL3Byb2ZpbGUtdXBkYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSAnLi9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50JztcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xuXG5pbXBvcnQge0Vycm9yQ29tcG9uZW50fSBmcm9tICcuL2Vycm9ycy9lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHtIdWJGb3JtQ29tcG9uZW50fSBmcm9tICcuL2h1YnMvaHViLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7SHViTGlzdENvbXBvbmVudH0gZnJvbSAnLi9odWJzL2h1Yi1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0h1Yk1haW5Db21wb25lbnR9IGZyb20gJy4vaHVicy9odWItbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHtIdWJNZXNzYWdlQ29tcG9uZW50fSBmcm9tICcuL2h1YnMvaHViLW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7SHViVXBkYXRlQ29tcG9uZW50fSBmcm9tICcuL2h1YnMvaHViLXVwZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtIdWJDb21wb25lbnR9IGZyb20gJy4vaHVicy9odWIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbiBcbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIFJPVVRJTkcsIEh0dHBNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LCBVc2VyTGlzdENvbXBvbmVudCwgVXNlclVwZGF0ZUNvbXBvbmVudCxcbiAgICAgICAgVXNlckNvbXBvbmVudCwgTG9nb3V0Q29tcG9uZW50LCBQcm9maWxlVXBkYXRlQ29tcG9uZW50LCBcbiAgICAgICAgU2lnbmluQ29tcG9uZW50LCBTaWdudXBDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LFxuICAgICAgICBIdWJGb3JtQ29tcG9uZW50LCBIdWJMaXN0Q29tcG9uZW50LCBIdWJNYWluQ29tcG9uZW50LFxuICAgICAgICBIdWJNZXNzYWdlQ29tcG9uZW50LCBIdWJVcGRhdGVDb21wb25lbnQsIEh1YkNvbXBvbmVudFxuICAgICAgICAvLyBGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1dGhTZXJ2aWNlLCBVc2VyU2VydmljZSwgRXJyb3JTZXJ2aWNlLCBcbiAgICAgICAgSHViU2VydmljZSwgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcygpLCBwcm92aWRlRm9ybXMoKSxcbiAgICAgICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6SGFzaExvY2F0aW9uU3RyYXRlZ3l9KVxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
