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
        // this._router.navigateByUrl('/h/title'+this.hub.title);
        this._router.navigate(['/h', this.hub.title]);
        this._hubService.hub = this.hub;
        // this._hubService.hubViewEvt.emit(this.hub);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBQzdFLG9CQUFrQixPQUFPLENBQUMsQ0FBQTtBQUMxQiw0QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsNkJBQTBCLHNCQUFzQixDQUFDLENBQUE7QUFDakQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFRdkM7SUFJSSxzQkFDWSxXQUF1QixFQUN2QixZQUF5QixFQUN6QixhQUEyQixFQUMzQixPQUFlO1FBSGYsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQU5qQixnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO1FBU2hELFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsU0FBSSxHQUFHLElBQUksQ0FBQztJQUhWLENBQUM7O0lBSUgsOEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUMvQixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQ3BDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBQ0QsOEJBQU8sR0FBUDtRQUNJLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNoQyw4Q0FBOEM7SUFDbEQsQ0FBQztJQUNELG1DQUFZLEdBQVo7SUFFQSxDQUFDO0lBQ0QsOEJBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxpQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQXBDRDtRQUFDLFlBQUssRUFBRTs7NkNBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7cURBQUE7SUFSYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNuQyxDQUFDOztvQkFBQTtJQXVDRixtQkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksb0JBQVksZUFzQ3hCLENBQUEiLCJmaWxlIjoiaHVicy9odWIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHVifSBmcm9tICcuL2h1Yic7XG5pbXBvcnQge0h1YlNlcnZpY2V9IGZyb20gJy4vaHViLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaHViLWFyZWEnLFxuICAgIHRlbXBsYXRlVXJsOiAnaHViLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaHViLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSHViQ29tcG9uZW50e1xuICAgIEBJbnB1dCgpIGh1YjogSHViO1xuICAgIEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SHViPigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2h1YlNlcnZpY2U6IEh1YlNlcnZpY2UsIFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIFxuICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgICApe307XG5cbiAgICBjb2xvciA9ICd3aGl0ZSc7XG4gICAgc2hvdyA9IHRydWU7XG4gICAgZWRpdEh1Yigpe1xuICAgICAgICB0aGlzLl9odWJTZXJ2aWNlLmVkaXRIdWIodGhpcy5odWIpO1xuICAgIH1cbiAgICBkZWxldGVIdWIoKXtcbiAgICAgICAgdGhpcy5faHViU2VydmljZS5kZWxldGVIdWIodGhpcy5odWIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICB2aWV3SHViKCl7XG4gICAgICAgIC8vIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvaC90aXRsZScrdGhpcy5odWIudGl0bGUpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvaCcsIHRoaXMuaHViLnRpdGxlXSk7XG4gICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuaHViID0gdGhpcy5odWI7XG4gICAgICAgIC8vIHRoaXMuX2h1YlNlcnZpY2UuaHViVmlld0V2dC5lbWl0KHRoaXMuaHViKTtcbiAgICB9XG4gICAgc3Vic2NyaWJlSHViKCl7XG5cbiAgICB9XG4gICAgaXNPd25lcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNPd25lcih0aGlzLmh1Yi5vd25lcklkKTtcbiAgICB9XG4gICAgaXNMb2dnZWRJbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
