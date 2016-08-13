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
var common_1 = require('@angular/common');
var user_1 = require('../user');
var auth_service_1 = require('../auth.service');
var router_1 = require('@angular/router');
var error_service_1 = require('../../errors/error.service');
var forms_1 = require('@angular/forms');
var SigninComponent = (function () {
    function SigninComponent(_fb, _authService, _router, _errorService) {
        this._fb = _fb;
        this._authService = _authService;
        this._router = _router;
        this._errorService = _errorService;
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_1.User(this.myForm.value.username, this.myForm.value.password);
        this._authService.signInUser(user)
            .subscribe(function (data) {
            _this._authService.user = data.obj;
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this._authService.updateLoggedUser(user);
            _this._router.navigate(['/']);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            username: ['', common_1.Validators.compose([common_1.Validators.required])],
            password: ['', common_1.Validators.required],
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signin-component',
            templateUrl: 'signin.component.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService, router_1.Router, error_service_1.ErrorService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBNkQsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRSxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFDN0IsNkJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsOEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFFeEQsc0JBQXdELGdCQUFnQixDQUFDLENBQUE7QUFTekU7SUFHSSx5QkFDWSxHQUFnQixFQUNoQixZQUF5QixFQUN6QixPQUFlLEVBQ2YsYUFBMkI7UUFIM0IsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDbkMsQ0FBQztJQUVMLGtDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDN0IsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDbEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxLQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXpDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN6QixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekQsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxVQUFVLEVBQUUsQ0FBQyx1QkFBZSxFQUFFLGdDQUF3QixDQUFDO1NBQzFELENBQUM7O3VCQUFBO0lBbUNGLHNCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSx1QkFBZSxrQkFpQzNCLENBQUEiLCJmaWxlIjoiYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi91c2VyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi8uLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge0FwcFZhbGlkYXRvcnN9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2lnbmluLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdzaWduaW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgb25TdWJtaXQoKXtcbiAgICAgICAgdmFyIHVzZXIgPSBuZXcgVXNlcih0aGlzLm15Rm9ybS52YWx1ZS51c2VybmFtZSwgdGhpcy5teUZvcm0udmFsdWUucGFzc3dvcmQpO1xuXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25JblVzZXIodXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICBcdCAgICAgICAgICAgICAgICB0aGlzLl9hdXRoU2VydmljZS51c2VyID0gZGF0YS5vYmo7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgZGF0YS51c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hdXRoU2VydmljZS51cGRhdGVMb2dnZWRVc2VyKHVzZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
