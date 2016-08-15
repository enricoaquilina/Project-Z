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
var user_service_1 = require('../user.service');
var error_service_1 = require('../../errors/error.service');
var router_1 = require('@angular/router');
var auth_service_1 = require('../auth.service');
var UserListComponent = (function () {
    function UserListComponent(_errorService, _userService, _router, _authService) {
        this._errorService = _errorService;
        this._userService = _userService;
        this._router = _router;
        this._authService = _authService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isAdmin = this._authService.isAdmin();
        if (!isAdmin) {
            this._router.navigate(['/']);
            return;
        }
        this._userService.getUsers()
            .subscribe(function (data) {
            _this.users = data;
        }, function (error) {
            _this._router.navigate(['/']);
            _this._errorService.handleError(error);
        });
    };
    UserListComponent.prototype.searchUser = function () {
    };
    UserListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-list',
            templateUrl: 'user-list.component.html',
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, user_service_1.UserService, router_1.Router, auth_service_1.AuthService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYWRtaW4vdXNlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELDZCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLDhCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3hELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBTzVDO0lBR0ksMkJBQ1ksYUFBMkIsRUFDM0IsWUFBeUIsRUFDekIsT0FBZSxFQUNmLFlBQXlCO1FBSHpCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUNqQyxDQUFDO0lBRUwsb0NBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCRyxJQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJELEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNULElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7YUFDdkIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBQ0Qsc0NBQVUsR0FBVjtJQUVBLENBQUM7SUFuQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzs7eUJBQUE7SUFnQ0Ysd0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLHlCQUFpQixvQkErQjdCLENBQUEiLCJmaWxlIjoiYXV0aC9hZG1pbi91c2VyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL3VzZXInO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi8uLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd1c2VyLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndXNlci1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgdXNlcnM6IFVzZXJbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3QgaXNBZG1pbjogYm9vbGVhbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmlzQWRtaW4oKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFpc0FkbWluKXtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgc2VhcmNoVXNlcigpe1xuICAgICAgICBcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
