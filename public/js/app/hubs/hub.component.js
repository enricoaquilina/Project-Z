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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBQ3JFLG9CQUFrQixPQUFPLENBQUMsQ0FBQTtBQUMxQiw0QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsNkJBQTBCLHNCQUFzQixDQUFDLENBQUE7QUFDakQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFTdkM7SUFJSSxzQkFDWSxXQUF1QixFQUN2QixZQUF5QixFQUN6QixhQUEyQixFQUMzQixPQUFlO1FBSGYsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQU5qQixnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO1FBU2hELFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsU0FBSSxHQUFHLElBQUksQ0FBQztJQUhWLENBQUM7O0lBS0gsOEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUMvQixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQ3BDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBQ0QsOEJBQU8sR0FBUDtJQUVBLENBQUM7SUFDRCxtQ0FBWSxHQUFaO0lBRUEsQ0FBQztJQUNELDhCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBL0JEO1FBQUMsWUFBSyxFQUFFOzs2Q0FBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOztxREFBQTtJQVRiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBRW5DLENBQUM7O29CQUFBO0lBa0NGLG1CQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSxvQkFBWSxlQWlDeEIsQ0FBQSIsImZpbGUiOiJodWJzL2h1Yi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHVifSBmcm9tICcuL2h1Yic7XG5pbXBvcnQge0h1YlNlcnZpY2V9IGZyb20gJy4vaHViLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaHViLWFyZWEnLFxuICAgIHRlbXBsYXRlVXJsOiAnaHViLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaHViLmNvbXBvbmVudC5jc3MnXSxcblxufSlcbmV4cG9ydCBjbGFzcyBIdWJDb21wb25lbnR7XG4gICAgQElucHV0KCkgaHViOiBIdWI7XG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxIdWI+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHViU2VydmljZTogSHViU2VydmljZSwgXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxuICAgICl7fTtcblxuICAgIGNvbG9yID0gJ3doaXRlJztcbiAgICBzaG93ID0gdHJ1ZTtcblxuICAgIGVkaXRIdWIoKXtcbiAgICAgICAgdGhpcy5faHViU2VydmljZS5lZGl0SHViKHRoaXMuaHViKTtcbiAgICB9XG4gICAgZGVsZXRlSHViKCl7XG4gICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuZGVsZXRlSHViKHRoaXMuaHViKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgdmlld0h1Yigpe1xuXG4gICAgfVxuICAgIHN1YnNjcmliZUh1Yigpe1xuXG4gICAgfVxuICAgIGlzT3duZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzT3duZXIodGhpcy5odWIub3duZXJJZCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
