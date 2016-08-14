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
var user_1 = require('../user');
var user_service_1 = require('../user.service');
var router_1 = require('@angular/router');
var error_service_1 = require('../../errors/error.service');
var UserComponent = (function () {
    function UserComponent(_userService, _router, _errorService) {
        this._userService = _userService;
        this._router = _router;
        this._errorService = _errorService;
    }
    UserComponent.prototype.viewUserProfile = function () {
        // this._router.navigate(['/f/'+this.user.username]);
    };
    UserComponent.prototype.followUser = function () {
    };
    UserComponent.prototype.editUser = function () {
        this._userService.editUser(this.user);
    };
    UserComponent.prototype.deleteUser = function () {
        var _this = this;
        this._userService.deleteUser(this.user)
            .subscribe(function (data) { return _this._router.navigate(['/']); }, function (error) { return _this._errorService.handleError(error); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserComponent.prototype, "user", void 0);
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-component',
            templateUrl: 'user.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, error_service_1.ErrorService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYWRtaW4vdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFDN0IsNkJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsOEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFPeEQ7SUFHSSx1QkFDWSxZQUF5QixFQUN6QixPQUFlLEVBQ2YsYUFBMkI7UUFGM0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQ25DLENBQUM7SUFFTCx1Q0FBZSxHQUFmO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFDRCxrQ0FBVSxHQUFWO0lBRUEsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELGtDQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEMsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE1QixDQUE0QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQXZCRjtRQUFDLFlBQUssRUFBRTs7K0NBQUE7SUFOWDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUscUJBQXFCO1NBQ3JDLENBQUM7O3FCQUFBO0lBMEJGLG9CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSxxQkFBYSxnQkF5QnpCLENBQUEiLCJmaWxlIjoiYXV0aC9hZG1pbi91c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL3VzZXInO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4uLy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3VzZXItY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3VzZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnQge1xuICAgQElucHV0KCkgdXNlcjogVXNlcjtcbiAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIHZpZXdVc2VyUHJvZmlsZSgpe1xuICAgICAgICAvLyB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZi8nK3RoaXMudXNlci51c2VybmFtZV0pO1xuICAgIH1cbiAgICBmb2xsb3dVc2VyKCl7XG5cbiAgICB9XG4gICAgZWRpdFVzZXIoKXtcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZWRpdFVzZXIodGhpcy51c2VyKTtcbiAgICB9XG4gICAgZGVsZXRlVXNlcigpe1xuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5kZWxldGVVc2VyKHRoaXMudXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
