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
var error_service_1 = require('../errors/error.service');
var auth_service_1 = require('../auth/auth.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var HubFormComponent = (function () {
    function HubFormComponent(_hubService, _errorService, _authService, _fbld, _router) {
        this._hubService = _hubService;
        this._errorService = _errorService;
        this._authService = _authService;
        this._fbld = _fbld;
        this._router = _router;
        this.hub = null;
    }
    HubFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var hub = new hub_1.Hub(form.title, form.description);
        this._hubService.addHub(hub)
            .subscribe(function (data) {
            _this._router.navigate(['/']);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    HubFormComponent.prototype.onClick = function () {
        this.hub = null;
    };
    HubFormComponent.prototype.ngOnInit = function () {
        var logged = this.isLoggedIn();
        if (!logged) {
            this._router.navigate(['/']);
        }
        this.form = this._fbld.group({
            title: ['', forms_1.Validators.required],
            description: ['', forms_1.Validators.required]
        });
    };
    HubFormComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    HubFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hub-form',
            templateUrl: 'hub-form.component.html',
        }), 
        __metadata('design:paramtypes', [hub_service_1.HubService, error_service_1.ErrorService, auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], HubFormComponent);
    return HubFormComponent;
}());
exports.HubFormComponent = HubFormComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsb0JBQWtCLE9BQU8sQ0FBQyxDQUFBO0FBQzFCLDRCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCw2QkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNqRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQU92QztJQUdJLDBCQUNZLFdBQXVCLEVBQ3ZCLGFBQTJCLEVBQzNCLFlBQXlCLEVBQ3pCLEtBQWtCLEVBQ2xCLE9BQWU7UUFKZixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFFM0IsUUFBRyxHQUFRLElBQUksQ0FBQztJQURaLENBQUM7SUFHTCxtQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUFsQixpQkFTQztRQVJHLElBQU0sR0FBRyxHQUFRLElBQUksU0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUN2QixTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQUNELGtDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0QsbUNBQVEsR0FBUjtRQUNJLElBQU0sTUFBTSxHQUFZLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyxFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN6QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QscUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUExQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzs7d0JBQUE7SUF3Q0YsdUJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLHdCQUFnQixtQkF1QzVCLENBQUEiLCJmaWxlIjoiaHVicy9odWItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHVifSBmcm9tICcuL2h1Yic7XG5pbXBvcnQge0h1YlNlcnZpY2V9IGZyb20gJy4vaHViLnNlcnZpY2UnO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdodWItZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICdodWItZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEh1YkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2h1YlNlcnZpY2U6IEh1YlNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2ZibGQ6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxuICAgICkgeyB9XG4gICAgaHViOiBIdWIgPSBudWxsO1xuXG4gICAgb25TdWJtaXQoZm9ybTogYW55KXsgICAgICAgIFxuICAgICAgICBjb25zdCBodWI6IEh1YiA9IG5ldyBIdWIoZm9ybS50aXRsZSwgZm9ybS5kZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuYWRkSHViKGh1YilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIHRoaXMuaHViID0gbnVsbDtcbiAgICB9XG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgY29uc3QgbG9nZ2VkOiBib29sZWFuID0gdGhpcy5pc0xvZ2dlZEluKCk7XG4gICAgICAgIGlmKCFsb2dnZWQpe1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9mYmxkLmdyb3VwKHtcbiAgICAgICAgICAgIHRpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzTG9nZ2VkSW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
