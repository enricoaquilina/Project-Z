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
var AppComponent = (function () {
    function AppComponent(_authService, _errorService) {
        this._authService = _authService;
        this._errorService = _errorService;
        this.user = null;
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    AppComponent.prototype.isAdmin = function () {
        // console.log(this._authService.user);
        return this._authService.user ? this._authService.user.isAdmin : false;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.hasSignedIn.subscribe(function (user) {
            _this.user = user;
        });
    };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCw2QkFBMEIscUJBQXFCLENBQUMsQ0FBQTtBQUNoRCxnQ0FBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQVNwRDtJQUNJLHNCQUNZLFlBQXlCLEVBQ3pCLGFBQTJCO1FBRDNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRXZDLFNBQUksR0FBUyxJQUFJLENBQUM7SUFEZCxDQUFDO0lBR0wsaUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCw4QkFBTyxHQUFQO1FBQ0ksdUNBQXVDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzNFLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3hDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXhCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxnQ0FBYyxDQUFDO1NBQ2xELENBQUM7O29CQUFBO0lBb0JGLG1CQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxvQkFBWSxlQW1CeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtFcnJvckNvbXBvbmVudH0gZnJvbSAnLi9lcnJvcnMvZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi9hdXRoL3VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBFcnJvckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZVxuICAgICkgeyB9XG4gICAgdXNlcjogVXNlciA9IG51bGw7XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpOyBcbiAgICB9XG4gICAgaXNBZG1pbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fYXV0aFNlcnZpY2UudXNlcik7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS51c2VyID8gdGhpcy5fYXV0aFNlcnZpY2UudXNlci5pc0FkbWluIDogZmFsc2U7XG4gICAgfVxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmhhc1NpZ25lZEluLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
