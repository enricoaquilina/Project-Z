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
    UserComponent.prototype.editUser = function (userToUpdate) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYWRtaW4vdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFDN0IsNkJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsOEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFPeEQ7SUFHSSx1QkFDWSxZQUF5QixFQUN6QixPQUFlLEVBQ2YsYUFBMkI7UUFGM0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQ25DLENBQUM7SUFFTCx1Q0FBZSxHQUFmO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFDRCxrQ0FBVSxHQUFWO0lBRUEsQ0FBQztJQUNELGdDQUFRLEdBQVIsVUFBUyxZQUFZO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0Qsa0NBQVUsR0FBVjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQyxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQ3BDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBdkJGO1FBQUMsWUFBSyxFQUFFOzsrQ0FBQTtJQU5YO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxxQkFBcUI7U0FDckMsQ0FBQzs7cUJBQUE7SUEwQkYsb0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHFCQUFhLGdCQXlCekIsQ0FBQSIsImZpbGUiOiJhdXRoL2FkbWluL3VzZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vdXNlcic7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAndXNlci1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndXNlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvbXBvbmVudCB7XG4gICBASW5wdXQoKSB1c2VyOiBVc2VyO1xuICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgdmlld1VzZXJQcm9maWxlKCl7XG4gICAgICAgIC8vIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9mLycrdGhpcy51c2VyLnVzZXJuYW1lXSk7XG4gICAgfVxuICAgIGZvbGxvd1VzZXIoKXtcblxuICAgIH1cbiAgICBlZGl0VXNlcih1c2VyVG9VcGRhdGUpe1xuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5lZGl0VXNlcih0aGlzLnVzZXIpO1xuICAgIH1cbiAgICBkZWxldGVVc2VyKCl7XG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmRlbGV0ZVVzZXIodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
