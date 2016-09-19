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
var user_1 = require('../user');
var router_1 = require('@angular/router');
var auth_service_1 = require('../auth.service');
var validators_1 = require('../../validators');
var core_1 = require('@angular/core');
var error_service_1 = require('../../errors/error.service');
var forms_1 = require('@angular/forms');
var SignupComponent = (function () {
    // username: Control;
    // email: Control;
    // password: Control;
    function SignupComponent(_errorService, _authService, _fbld, _router) {
        this._errorService = _errorService;
        this._authService = _authService;
        this._fbld = _fbld;
        this._router = _router;
    }
    SignupComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var user = new user_1.User(form.username, form.password, form.email);
        this._authService.addUser(user)
            .subscribe(function (data) {
            _this._router.navigate(['/signin']);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this._fbld.group({
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            email: ['', [forms_1.Validators.required, validators_1.AppValidators.isEmail]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        });
    };
    SignupComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup-component',
            templateUrl: 'signup.component.html'
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3Qix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2Qyw2QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QywyQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQyxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsOEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFPbEU7SUFHSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUVyQix5QkFDWSxhQUEyQixFQUMzQixZQUF5QixFQUN6QixLQUFrQixFQUNsQixPQUFlO1FBSGYsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ3ZCLENBQUM7SUFFTCxrQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUFsQixpQkFTQztRQVJHLElBQU0sSUFBSSxHQUFTLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQzFCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQU0sa0JBQVUsQ0FBQyxRQUFRLEVBQU8sa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBTSxrQkFBVSxDQUFDLFFBQVEsRUFBQywwQkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdELFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFNLGtCQUFVLENBQUMsUUFBUSxFQUFPLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0UsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELG9DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBdkNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzs7dUJBQUE7SUFvQ0Ysc0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLHVCQUFlLGtCQW1DM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVc2VyfSBmcm9tICcuLi91c2VyJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7QXBwVmFsaWRhdG9yc30gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycyc7XG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi8uLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NpZ251cC1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2lnbnVwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIFxuICAgIC8vIHVzZXJuYW1lOiBDb250cm9sO1xuICAgIC8vIGVtYWlsOiBDb250cm9sO1xuICAgIC8vIHBhc3N3b3JkOiBDb250cm9sO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2ZibGQ6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxuICAgICkgeyB9XG5cbiAgICBvblN1Ym1pdChmb3JtOiBhbnkpIHsgICAgICAgIFxuICAgICAgICBjb25zdCB1c2VyOiBVc2VyID0gbmV3IFVzZXIoZm9ybS51c2VybmFtZSwgZm9ybS5wYXNzd29yZCwgZm9ybS5lbWFpbCk7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmFkZFVzZXIodXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9zaWduaW4nXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fZmJsZC5ncm91cCh7XG4gICAgICAgICAgICB1c2VybmFtZTogWycnLCBbPGFueT5WYWxpZGF0b3JzLnJlcXVpcmVkLCA8YW55PlZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXV0sXG4gICAgICAgICAgICBlbWFpbDogWycnLCBbPGFueT5WYWxpZGF0b3JzLnJlcXVpcmVkLEFwcFZhbGlkYXRvcnMuaXNFbWFpbF1dLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgWzxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZCwgPGFueT5WYWxpZGF0b3JzLm1pbkxlbmd0aCg4KV1dXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
