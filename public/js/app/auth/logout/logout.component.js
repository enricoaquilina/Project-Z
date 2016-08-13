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
var auth_service_1 = require('../auth.service');
var router_1 = require('@angular/router');
var LogoutComponent = (function () {
    function LogoutComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    LogoutComponent.prototype.onLogout = function () {
        this._auth.logout();
        this._router.navigate(['signin']);
    };
    LogoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-logout',
            templateUrl: 'logout.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyw2QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQU92QztJQUNJLHlCQUFvQixLQUFrQixFQUFVLE9BQWU7UUFBM0MsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRSxDQUFDO0lBRWxFLGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBWEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzs7dUJBQUE7SUFRRixzQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksdUJBQWUsa0JBTzNCLENBQUEiLCJmaWxlIjoiYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWxvZ291dCcsXG4gICAgdGVtcGxhdGVVcmw6ICdsb2dvdXQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aDogQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKXt9XG5cbiAgICBvbkxvZ291dCgpe1xuICAgICAgICB0aGlzLl9hdXRoLmxvZ291dCgpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydzaWduaW4nXSk7XG4gICAgfVxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
