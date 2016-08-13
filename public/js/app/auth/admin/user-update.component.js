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
var UserUpdateComponent = (function () {
    function UserUpdateComponent(_userService, _errorService, _fbld, _router) {
        this._userService = _userService;
        this._errorService = _errorService;
        this._fbld = _fbld;
        this._router = _router;
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
        __metadata('design:paramtypes', [user_service_1.UserService, error_service_1.ErrorService, forms_2.FormBuilder, router_1.Router])
    ], UserUpdateComponent);
    return UserUpdateComponent;
}());
exports.UserUpdateComponent = UserUpdateComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYWRtaW4vdXNlci11cGRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsc0JBQXdELGdCQUFnQixDQUFDLENBQUE7QUFDekUsNkJBQTBCLG1CQUFtQixDQUFDLENBQUE7QUFFOUMsOEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFRbEU7SUFDSSw2QkFDWSxZQUF5QixFQUN6QixhQUEyQixFQUMzQixLQUFrQixFQUNsQixPQUFlO1FBSGYsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRTNCLFNBQUksR0FBUyxJQUFJLENBQUM7SUFEZCxDQUFDO0lBSUwscUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2YsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ2QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7SUFDRCxzQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUFsQixpQkFhQztRQVpHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUvQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xDLFNBQVMsQ0FBRSxVQUFBLElBQUk7WUFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxVQUFVLEtBQUs7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQTFDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxVQUFVLEVBQUUsQ0FBQyx1QkFBZSxFQUFDLGdDQUF3QixDQUFDO1NBQ3pELENBQUM7OzJCQUFBO0lBdUNGLDBCQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXRDWSwyQkFBbUIsc0JBc0MvQixDQUFBIiwiZmlsZSI6ImF1dGgvYWRtaW4vdXNlci11cGRhdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uL3VzZXIuc2VydmljZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4vdXNlcic7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3VzZXItdXBkYXRlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3VzZXItdXBkYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTLFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgVXNlclVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2ZibGQ6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxuICAgICkgeyB9XG4gICAgdXNlcjogVXNlciA9IG51bGw7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbnVsbDtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuX3VzZXJTZXJ2aWNlLnVzZXI7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2ZibGQuZ3JvdXAoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogWycnXSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJyddLFxuICAgICAgICAgICAgYWRtaW46IFsnJ11cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBvblN1Ym1pdChmb3JtOiBhbnkpIHtcbiAgICAgICAgdGhpcy51c2VyLnVzZXJuYW1lID0gZm9ybS51c2VybmFtZTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gZm9ybS5lbWFpbDtcbiAgICAgICAgdGhpcy51c2VyLmZpcnN0TmFtZSA9IGZvcm0uZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLnVzZXIubGFzdE5hbWUgPSBmb3JtLmxhc3ROYW1lO1xuICAgICAgICB0aGlzLnVzZXIuaXNBZG1pbiA9IGZvcm0uYWRtaW47XG5cbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UudXBkYXRlVXNlcih0aGlzLnVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy91c2VycyddKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7IFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7IFxuICAgICAgICB9KTtcbiAgICB9O1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
