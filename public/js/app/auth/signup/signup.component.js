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
// import {HubComponent} from './hub.component';
var user_1 = require('../user');
// import {HubService} from '../hub.service';
var error_service_1 = require('../../errors/error.service');
var auth_service_1 = require('../auth.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var validators_1 = require('../../validators');
var SignupComponent = (function () {
    function SignupComponent(
        // private _hubService: HubService,
        _errorService, _authService, _fbld, _router) {
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
            templateUrl: 'signup.component.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService, auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxnREFBZ0Q7QUFDaEQscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDZDQUE2QztBQUM3Qyw4QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCw2QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QyxzQkFBMkYsZ0JBQWdCLENBQUMsQ0FBQTtBQUU1Ryx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QywyQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQVEvQztJQU9JO1FBQ0ksbUNBQW1DO1FBQzNCLGFBQTJCLEVBQzNCLFlBQXlCLEVBQ3pCLEtBQWtCLEVBQ2xCLE9BQWU7UUFIZixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDdkIsQ0FBQztJQUVMLGtDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQWxCLGlCQVNDO1FBUkcsSUFBTSxJQUFJLEdBQVMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDMUIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBTSxrQkFBVSxDQUFDLFFBQVEsRUFBTyxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFNLGtCQUFVLENBQUMsUUFBUSxFQUFDLDBCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0QsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQU0sa0JBQVUsQ0FBQyxRQUFRLEVBQU8sa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsb0NBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUF6Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxVQUFVLEVBQUUsQ0FBQyx1QkFBZSxFQUFFLGdDQUF3QixDQUFDO1NBQzFELENBQUM7O3VCQUFBO0lBcUNGLHNCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtBQXBDWSx1QkFBZSxrQkFvQzNCLENBQUEiLCJmaWxlIjoiYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHtIdWJDb21wb25lbnR9IGZyb20gJy4vaHViLmNvbXBvbmVudCc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL3VzZXInO1xuLy8gaW1wb3J0IHtIdWJTZXJ2aWNlfSBmcm9tICcuLi9odWIuc2VydmljZSc7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0FwcFZhbGlkYXRvcnN9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2lnbnVwLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdzaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBcbiAgICB1c2VybmFtZTogQ29udHJvbDtcbiAgICBlbWFpbDogQ29udHJvbDtcbiAgICBwYXNzd29yZDogQ29udHJvbDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAvLyBwcml2YXRlIF9odWJTZXJ2aWNlOiBIdWJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9mYmxkOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgICApIHsgfVxuXG4gICAgb25TdWJtaXQoZm9ybTogYW55KSB7ICAgICAgICBcbiAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IG5ldyBVc2VyKGZvcm0udXNlcm5hbWUsIGZvcm0ucGFzc3dvcmQsIGZvcm0uZW1haWwpO1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5hZGRVc2VyKHVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvc2lnbmluJ10pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2ZibGQuZ3JvdXAoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFsnJywgWzxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZCwgPGFueT5WYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV1dLFxuICAgICAgICAgICAgZW1haWw6IFsnJywgWzxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZCxBcHBWYWxpZGF0b3JzLmlzRW1haWxdXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFs8YW55PlZhbGlkYXRvcnMucmVxdWlyZWQsIDxhbnk+VmFsaWRhdG9ycy5taW5MZW5ndGgoOCldXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
