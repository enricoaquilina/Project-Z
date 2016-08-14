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
var ProfileUpdateComponent = (function () {
    function ProfileUpdateComponent(_userService, _errorService, _fbld, _router, _authService) {
        this._userService = _userService;
        this._errorService = _errorService;
        this._fbld = _fbld;
        this._router = _router;
        this._authService = _authService;
        this.user = null;
    }
    ProfileUpdateComponent.prototype.onClick = function () {
        this.user = null;
    };
    ProfileUpdateComponent.prototype.ngOnInit = function () {
        this.user = this._authService.user;
        this.form = this._fbld.group({
            username: ['', forms_2.Validators.required],
            email: ['', forms_2.Validators.required],
            firstName: [''],
            lastName: ['']
        });
    };
    ;
    ProfileUpdateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.user.username = form.username;
        this.user.email = form.email;
        this.user.firstName = form.firstName;
        this.user.lastName = form.lastName;
        this._userService.updateUser(this.user)
            .subscribe(function (data) {
            _this._authService.hasSignedIn.emit(data.obj);
            _this._router.navigate(['/']);
        }, function (error) {
            return this._errorService.handleError(error);
        });
    };
    ;
    ProfileUpdateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile-component',
            templateUrl: 'profile-update.component.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, error_service_1.ErrorService, forms_2.FormBuilder, router_1.Router, auth_service_1.AuthService])
    ], ProfileUpdateComponent);
    return ProfileUpdateComponent;
}());
exports.ProfileUpdateComponent = ProfileUpdateComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvcHJvZmlsZS9wcm9maWxlLXVwZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxzQkFBd0QsZ0JBQWdCLENBQUMsQ0FBQTtBQUN6RSw2QkFBMEIsbUJBQW1CLENBQUMsQ0FBQTtBQUU5Qyw4QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSw2QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQVE1QztJQUNJLGdDQUNZLFlBQXlCLEVBQ3pCLGFBQTJCLEVBQzNCLEtBQWtCLEVBQ2xCLE9BQWUsRUFDZixZQUF5QjtRQUp6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUVyQyxTQUFJLEdBQVMsSUFBSSxDQUFDO0lBRGQsQ0FBQztJQUlMLHdDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDOztJQUNELHlDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQWxCLGlCQWFDO1FBWkcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVuQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xDLFNBQVMsQ0FBRSxVQUFBLElBQUk7WUFDaEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFFLFVBQVUsS0FBSztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBMUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsVUFBVSxFQUFFLENBQUMsdUJBQWUsRUFBQyxnQ0FBd0IsQ0FBQztTQUN6RCxDQUFDOzs4QkFBQTtJQXVDRiw2QkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksOEJBQXNCLHlCQXNDbEMsQ0FBQSIsImZpbGUiOiJhdXRoL3Byb2ZpbGUvcHJvZmlsZS11cGRhdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uL3VzZXIuc2VydmljZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4vdXNlcic7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwcm9maWxlLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdwcm9maWxlLXVwZGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFUyxSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVVcGRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9mYmxkOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICAgICkgeyB9XG4gICAgdXNlcjogVXNlciA9IG51bGw7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbnVsbDtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhTZXJ2aWNlLnVzZXI7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2ZibGQuZ3JvdXAoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogWycnXSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJyddXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgb25TdWJtaXQoZm9ybTogYW55KSB7XG4gICAgICAgIHRoaXMudXNlci51c2VybmFtZSA9IGZvcm0udXNlcm5hbWU7XG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IGZvcm0uZW1haWw7XG4gICAgICAgIHRoaXMudXNlci5maXJzdE5hbWUgPSBmb3JtLmZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy51c2VyLmxhc3ROYW1lID0gZm9ybS5sYXN0TmFtZTtcblxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS51cGRhdGVVc2VyKHRoaXMudXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UuaGFzU2lnbmVkSW4uZW1pdChkYXRhLm9iaik7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgXG4gICAgICAgIH0pO1xuICAgIH07XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
