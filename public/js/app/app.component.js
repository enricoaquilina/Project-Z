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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth/auth.service');
var error_component_1 = require('./errors/error.component');
var error_service_1 = require('./errors/error.service');
var user_1 = require('./auth/user');
var AppComponent = (function () {
    function AppComponent(_authService, _errorService) {
        this._authService = _authService;
        this._errorService = _errorService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user = this._authService.user ? this._authService.user : new user_1.User('', '');
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    AppComponent.prototype.isAdmin = function () {
        // console.log(this._authService.user);
        return this._authService.user ? this._authService.user.isAdmin : false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], AppComponent.prototype, "user", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, error_component_1.ErrorComponent]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, error_service_1.ErrorService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCw2QkFBMEIscUJBQXFCLENBQUMsQ0FBQTtBQUNoRCxnQ0FBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCxxQkFBbUIsYUFBYSxDQUFDLENBQUE7QUFRakM7SUFDSSxzQkFDWSxZQUF5QixFQUN6QixhQUEyQjtRQUQzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUNuQyxDQUFDO0lBR0wsK0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFDRCxpQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUNELDhCQUFPLEdBQVA7UUFDSSx1Q0FBdUM7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDM0UsQ0FBQztJQVhEO1FBQUMsWUFBSyxFQUFFOzs4Q0FBQTtJQVhaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdDQUFjLENBQUM7U0FDbEQsQ0FBQzs7b0JBQUE7SUFrQkYsbUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLG9CQUFZLGVBaUJ4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0Vycm9yQ29tcG9uZW50fSBmcm9tICcuL2Vycm9ycy9lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuL2F1dGgvdXNlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEVycm9yQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2VcbiAgICApIHsgfVxuICAgIEBJbnB1dCgpIHVzZXI6IFVzZXI7XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoU2VydmljZS51c2VyID8gdGhpcy5fYXV0aFNlcnZpY2UudXNlciA6IG5ldyBVc2VyKCcnLCcnKTtcbiAgICB9XG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTsgXG4gICAgfVxuICAgIGlzQWRtaW4oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2F1dGhTZXJ2aWNlLnVzZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UudXNlciA/IHRoaXMuX2F1dGhTZXJ2aWNlLnVzZXIuaXNBZG1pbiA6IGZhbHNlO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
