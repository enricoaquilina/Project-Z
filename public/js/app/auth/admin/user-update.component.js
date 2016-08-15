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
var user_service_1 = require('.././user.service');
var error_service_1 = require('../../errors/error.service');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
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
            username: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
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
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, error_service_1.ErrorService, forms_1.FormBuilder, router_1.Router, auth_service_1.AuthService])
    ], UserUpdateComponent);
    return UserUpdateComponent;
}());
exports.UserUpdateComponent = UserUpdateComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYWRtaW4vdXNlci11cGRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsNkJBQTBCLG1CQUFtQixDQUFDLENBQUE7QUFFOUMsOEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsNkJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFPNUM7SUFDSSw2QkFDWSxZQUF5QixFQUN6QixhQUEyQixFQUMzQixLQUFrQixFQUNsQixPQUFlLEVBQ2YsWUFBeUI7UUFKekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFckMsU0FBSSxHQUFTLElBQUksQ0FBQztJQURkLENBQUM7SUFJTCxxQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDZCxDQUFDLENBQUM7SUFDUCxDQUFDOztJQUNELHNDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQWxCLGlCQWFDO1FBWkcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRS9CLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEMsU0FBUyxDQUFFLFVBQUEsSUFBSTtZQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFFLFVBQVUsS0FBSztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBMUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1NBQzVDLENBQUM7OzJCQUFBO0lBd0NGLDBCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXZDWSwyQkFBbUIsc0JBdUMvQixDQUFBIiwiZmlsZSI6ImF1dGgvYWRtaW4vdXNlci11cGRhdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uL3VzZXIuc2VydmljZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4vdXNlcic7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd1c2VyLXVwZGF0ZScsXG4gICAgdGVtcGxhdGVVcmw6ICd1c2VyLXVwZGF0ZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJVcGRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9mYmxkOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICAgICkgeyB9XG4gICAgdXNlcjogVXNlciA9IG51bGw7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbnVsbDtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuX3VzZXJTZXJ2aWNlLnVzZXI7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2ZibGQuZ3JvdXAoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogWycnXSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJyddLFxuICAgICAgICAgICAgYWRtaW46IFsnJ11cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBvblN1Ym1pdChmb3JtOiBhbnkpIHtcbiAgICAgICAgdGhpcy51c2VyLnVzZXJuYW1lID0gZm9ybS51c2VybmFtZTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gZm9ybS5lbWFpbDtcbiAgICAgICAgdGhpcy51c2VyLmZpcnN0TmFtZSA9IGZvcm0uZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLnVzZXIubGFzdE5hbWUgPSBmb3JtLmxhc3ROYW1lO1xuICAgICAgICB0aGlzLnVzZXIuaXNBZG1pbiA9IGZvcm0uYWRtaW47XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS51cGRhdGVVc2VyKHRoaXMudXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3VzZXJzJ10pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgXG4gICAgICAgIH0pO1xuICAgIH07XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
