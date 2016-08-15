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
var hub_service_1 = require('./hub.service');
var error_service_1 = require('../errors/error.service');
var auth_service_1 = require('../auth/auth.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var HubUpdateComponent = (function () {
    function HubUpdateComponent(_hubService, _errorService, _authService, _fbld, _router) {
        this._hubService = _hubService;
        this._errorService = _errorService;
        this._authService = _authService;
        this._fbld = _fbld;
        this._router = _router;
        this.hub = null;
    }
    HubUpdateComponent.prototype.onClick = function () {
        this.hub = null;
    };
    ;
    HubUpdateComponent.prototype.ngOnInit = function () {
        this.hub = this._hubService.hub;
        this.form = this._fbld.group({
            title: ['', forms_1.Validators.required],
            description: ['', forms_1.Validators.required]
        });
    };
    ;
    HubUpdateComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    ;
    HubUpdateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.hub.title = form.title;
        this.hub.description = form.description;
        this._hubService.updateHub(this.hub)
            .subscribe(function (data) {
            _this._router.navigate(['/']);
        }, function (error) {
            return this._errorService.handleError(error);
        });
    };
    ;
    HubUpdateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hub-update',
            templateUrl: 'hub-update.component.html'
        }), 
        __metadata('design:paramtypes', [hub_service_1.HubService, error_service_1.ErrorService, auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], HubUpdateComponent);
    return HubUpdateComponent;
}());
exports.HubUpdateComponent = HubUpdateComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLXVwZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyw0QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsNkJBQTBCLHNCQUFzQixDQUFDLENBQUE7QUFDakQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFFbEUsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFRdkM7SUFDSSw0QkFDWSxXQUF1QixFQUN2QixhQUEyQixFQUMzQixZQUF5QixFQUN6QixLQUFrQixFQUNsQixPQUFlO1FBSmYsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRTNCLFFBQUcsR0FBUSxJQUFJLENBQUM7SUFEWixDQUFDO0lBSUwsb0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7O0lBRUQscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3pDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBRUQsdUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7O0lBRUQscUNBQVEsR0FBUixVQUFTLElBQVM7UUFBbEIsaUJBU0M7UUFSRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUMvQixTQUFTLENBQUUsVUFBQSxJQUFJO1lBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsVUFBVSxLQUFLO1lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7SUExQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzs7MEJBQUE7SUF1Q0YseUJBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBckNZLDBCQUFrQixxQkFxQzlCLENBQUEiLCJmaWxlIjoiaHVicy9odWItdXBkYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h1YlNlcnZpY2V9IGZyb20gJy4vaHViLnNlcnZpY2UnO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtIdWJ9IGZyb20gJy4vaHViJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaHViLXVwZGF0ZScsXG4gICAgdGVtcGxhdGVVcmw6ICdodWItdXBkYXRlLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEh1YlVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHViU2VydmljZTogSHViU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZmJsZDogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cbiAgICBodWI6IEh1YiA9IG51bGw7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5odWIgPSBudWxsO1xuICAgIH07XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5odWIgPSB0aGlzLl9odWJTZXJ2aWNlLmh1YjtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fZmJsZC5ncm91cCh7XG4gICAgICAgICAgICB0aXRsZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH07XG5cbiAgICBvblN1Ym1pdChmb3JtOiBhbnkpIHtcbiAgICAgICAgdGhpcy5odWIudGl0bGUgPSBmb3JtLnRpdGxlO1xuICAgICAgICB0aGlzLmh1Yi5kZXNjcmlwdGlvbiA9IGZvcm0uZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2h1YlNlcnZpY2UudXBkYXRlSHViKHRoaXMuaHViKVxuICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgXG4gICAgICAgIH0pO1xuICAgIH07XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
