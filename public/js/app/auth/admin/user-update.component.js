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
var forms_1 = require('@angular/forms');
var user_service_1 = require('.././user.service');
var error_service_1 = require('../../errors/error.service');
var router_1 = require('@angular/router');
var forms_2 = require('@angular/forms');
var auth_service_1 = require('../auth.service');
var UserUpdateComponent = (function () {
    function UserUpdateComponent(_userService, _errorService, _fbld, _router, _authService) {
        this._userService = _userService;
        this._errorService = _errorService;
        this._fbld = _fbld;
        this._router = _router;
        this._authService = _authService;
        this.user = null;
    }
    UserUpdateComponent.prototype.onClick = function () {
        this.user = null;
    };
    UserUpdateComponent.prototype.ngOnInit = function () {
        this.user = this._userService.user;
        this.form = this._fbld.group({
            username: ['', forms_2.Validators.required],
            email: ['', forms_2.Validators.required],
            firstName: [''],
            lastName: [''],
            admin: ['']
        });
    };
    ;
    UserUpdateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.user.username = form.username;
        this.user.email = form.email;
        this.user.firstName = form.firstName;
        this.user.lastName = form.lastName;
        this.user.isAdmin = form.admin;
        this._userService.updateUser(this.user)
            .subscribe(function (data) {
            _this._router.navigate(['/users']);
        }, function (error) {
            return this._errorService.handleError(error);
        });
    };
    ;
    UserUpdateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-update',
            templateUrl: 'user-update.component.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, error_service_1.ErrorService, forms_2.FormBuilder, router_1.Router, auth_service_1.AuthService])
    ], UserUpdateComponent);
    return UserUpdateComponent;
}());
exports.UserUpdateComponent = UserUpdateComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYWRtaW4vdXNlci11cGRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsc0JBQXdELGdCQUFnQixDQUFDLENBQUE7QUFDekUsNkJBQTBCLG1CQUFtQixDQUFDLENBQUE7QUFFOUMsOEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsNkJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFRNUM7SUFDSSw2QkFDWSxZQUF5QixFQUN6QixhQUEyQixFQUMzQixLQUFrQixFQUNsQixPQUFlLEVBQ2YsWUFBeUI7UUFKekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFckMsU0FBSSxHQUFTLElBQUksQ0FBQztJQURkLENBQUM7SUFJTCxxQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDZCxDQUFDLENBQUM7SUFDUCxDQUFDOztJQUNELHNDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQWxCLGlCQWFDO1FBWkcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRS9CLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEMsU0FBUyxDQUFFLFVBQUEsSUFBSTtZQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFFLFVBQVUsS0FBSztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBM0NMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFVBQVUsRUFBRSxDQUFDLHVCQUFlLEVBQUMsZ0NBQXdCLENBQUM7U0FDekQsQ0FBQzs7MkJBQUE7SUF3Q0YsMEJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLDJCQUFtQixzQkF1Qy9CLENBQUEiLCJmaWxlIjoiYXV0aC9hZG1pbi91c2VyLXVwZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uLy4vdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi91c2VyJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi8uLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3VzZXItdXBkYXRlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3VzZXItdXBkYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTLFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgVXNlclVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2ZibGQ6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICAgKSB7IH1cbiAgICB1c2VyOiBVc2VyID0gbnVsbDtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnVzZXIgPSBudWxsO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5fdXNlclNlcnZpY2UudXNlcjtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fZmJsZC5ncm91cCh7XG4gICAgICAgICAgICB1c2VybmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiBbJyddLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFsnJ10sXG4gICAgICAgICAgICBhZG1pbjogWycnXVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIG9uU3VibWl0KGZvcm06IGFueSkge1xuICAgICAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSBmb3JtLnVzZXJuYW1lO1xuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBmb3JtLmVtYWlsO1xuICAgICAgICB0aGlzLnVzZXIuZmlyc3ROYW1lID0gZm9ybS5maXJzdE5hbWU7XG4gICAgICAgIHRoaXMudXNlci5sYXN0TmFtZSA9IGZvcm0ubGFzdE5hbWU7XG4gICAgICAgIHRoaXMudXNlci5pc0FkbWluID0gZm9ybS5hZG1pbjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvdXNlcnMnXSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikgeyBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyBcbiAgICAgICAgfSk7XG4gICAgfTtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
