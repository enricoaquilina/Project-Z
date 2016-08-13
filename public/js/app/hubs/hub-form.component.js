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
var forms_2 = require('@angular/forms');
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
            title: ['', forms_2.Validators.required],
            description: ['', forms_2.Validators.required]
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
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [hub_service_1.HubService, error_service_1.ErrorService, auth_service_1.AuthService, forms_2.FormBuilder, router_1.Router])
    ], HubFormComponent);
    return HubFormComponent;
}());
exports.HubFormComponent = HubFormComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsb0JBQWtCLE9BQU8sQ0FBQyxDQUFBO0FBQzFCLDRCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCw2QkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNqRCxzQkFBd0QsZ0JBQWdCLENBQUMsQ0FBQTtBQUN6RSxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQVF2QztJQUdJLDBCQUNZLFdBQXVCLEVBQ3ZCLGFBQTJCLEVBQzNCLFlBQXlCLEVBQ3pCLEtBQWtCLEVBQ2xCLE9BQWU7UUFKZixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFFM0IsUUFBRyxHQUFRLElBQUksQ0FBQztJQURaLENBQUM7SUFHTCxtQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUFsQixpQkFTQztRQVJHLElBQU0sR0FBRyxHQUFRLElBQUksU0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUN2QixTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQUNELGtDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0QsbUNBQVEsR0FBUjtRQUNJLElBQU0sTUFBTSxHQUFZLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyxFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN6QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QscUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUEzQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsVUFBVSxFQUFFLENBQUMsdUJBQWUsRUFBRSxnQ0FBd0IsQ0FBQztTQUMxRCxDQUFDOzt3QkFBQTtJQXdDRix1QkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF2Q1ksd0JBQWdCLG1CQXVDNUIsQ0FBQSIsImZpbGUiOiJodWJzL2h1Yi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdWJDb21wb25lbnR9IGZyb20gJy4vaHViLmNvbXBvbmVudCc7XG5pbXBvcnQge0h1Yn0gZnJvbSAnLi9odWInO1xuaW1wb3J0IHtIdWJTZXJ2aWNlfSBmcm9tICcuL2h1Yi5zZXJ2aWNlJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaHViLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnaHViLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgSHViRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHViU2VydmljZTogSHViU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZmJsZDogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cbiAgICBodWI6IEh1YiA9IG51bGw7XG5cbiAgICBvblN1Ym1pdChmb3JtOiBhbnkpeyAgICAgICAgXG4gICAgICAgIGNvbnN0IGh1YjogSHViID0gbmV3IEh1Yihmb3JtLnRpdGxlLCBmb3JtLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5faHViU2VydmljZS5hZGRIdWIoaHViKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy5odWIgPSBudWxsO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICBjb25zdCBsb2dnZWQ6IGJvb2xlYW4gPSB0aGlzLmlzTG9nZ2VkSW4oKTtcbiAgICAgICAgaWYoIWxvZ2dlZCl7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2ZibGQuZ3JvdXAoe1xuICAgICAgICAgICAgdGl0bGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNMb2dnZWRJbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
