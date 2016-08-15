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
var hub_1 = require('./hub');
var hub_service_1 = require('./hub.service');
var auth_service_1 = require('../auth/auth.service');
var error_service_1 = require('../errors/error.service');
var router_1 = require('@angular/router');
var HubComponent = (function () {
    function HubComponent(_hubService, _authService, _errorService, _router) {
        this._hubService = _hubService;
        this._authService = _authService;
        this._errorService = _errorService;
        this._router = _router;
        this.editClicked = new core_1.EventEmitter();
        this.color = 'white';
        this.show = true;
    }
    ;
    HubComponent.prototype.editHub = function () {
        this._hubService.editHub(this.hub);
    };
    HubComponent.prototype.deleteHub = function () {
        var _this = this;
        this._hubService.deleteHub(this.hub)
            .subscribe(function (data) { return _this._router.navigate(['/']); }, function (error) { return _this._errorService.handleError(error); });
    };
    HubComponent.prototype.viewHub = function () {
    };
    HubComponent.prototype.subscribeHub = function () {
    };
    HubComponent.prototype.isOwner = function () {
        return this._authService.isOwner(this.hub.ownerId);
    };
    HubComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hub_1.Hub)
    ], HubComponent.prototype, "hub", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HubComponent.prototype, "editClicked", void 0);
    HubComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hub-area',
            templateUrl: 'hub.component.html',
            styleUrls: ['hub.component.css'],
        }), 
        __metadata('design:paramtypes', [hub_service_1.HubService, auth_service_1.AuthService, error_service_1.ErrorService, router_1.Router])
    ], HubComponent);
    return HubComponent;
}());
exports.HubComponent = HubComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBQzdFLG9CQUFrQixPQUFPLENBQUMsQ0FBQTtBQUMxQiw0QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsNkJBQTBCLHNCQUFzQixDQUFDLENBQUE7QUFDakQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFRdkM7SUFJSSxzQkFDWSxXQUF1QixFQUN2QixZQUF5QixFQUN6QixhQUEyQixFQUMzQixPQUFlO1FBSGYsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQU5qQixnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO1FBU2hELFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsU0FBSSxHQUFHLElBQUksQ0FBQztJQUhWLENBQUM7O0lBSUgsOEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUMvQixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQ3BDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBQ0QsOEJBQU8sR0FBUDtJQUVBLENBQUM7SUFDRCxtQ0FBWSxHQUFaO0lBRUEsQ0FBQztJQUNELDhCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsaUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFqQ0Q7UUFBQyxZQUFLLEVBQUU7OzZDQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3FEQUFBO0lBUmI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQzs7b0JBQUE7SUFvQ0YsbUJBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLG9CQUFZLGVBbUN4QixDQUFBIiwiZmlsZSI6Imh1YnMvaHViLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h1Yn0gZnJvbSAnLi9odWInO1xuaW1wb3J0IHtIdWJTZXJ2aWNlfSBmcm9tICcuL2h1Yi5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2h1Yi1hcmVhJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2h1Yi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2h1Yi5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEh1YkNvbXBvbmVudHtcbiAgICBASW5wdXQoKSBodWI6IEh1YjtcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEh1Yj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9odWJTZXJ2aWNlOiBIdWJTZXJ2aWNlLCBcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICAgKXt9O1xuXG4gICAgY29sb3IgPSAnd2hpdGUnO1xuICAgIHNob3cgPSB0cnVlO1xuICAgIGVkaXRIdWIoKXtcbiAgICAgICAgdGhpcy5faHViU2VydmljZS5lZGl0SHViKHRoaXMuaHViKTtcbiAgICB9XG4gICAgZGVsZXRlSHViKCl7XG4gICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuZGVsZXRlSHViKHRoaXMuaHViKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgdmlld0h1Yigpe1xuXG4gICAgfVxuICAgIHN1YnNjcmliZUh1Yigpe1xuXG4gICAgfVxuICAgIGlzT3duZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzT3duZXIodGhpcy5odWIub3duZXJJZCk7XG4gICAgfVxuICAgIGlzTG9nZ2VkSW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
