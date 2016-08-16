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
var auth_service_1 = require('./auth/auth.service');
var error_service_1 = require('./errors/error.service');
var AppComponent = (function () {
    function AppComponent(_authService, _errorService) {
        this._authService = _authService;
        this._errorService = _errorService;
        this.user = null;
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    AppComponent.prototype.isAdmin = function () {
        console.log(this._authService.user);
        return this._authService.user ? this._authService.user.isAdmin : false;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.hasSignedIn.subscribe(function (user) {
            _this.user = user;
        });
        if (!this.user) {
            this._authService.getUserDetails()
                .subscribe(function (data) {
                _this.user = data.obj;
                _this._authService.user = _this.user;
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, error_service_1.ErrorService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCw2QkFBMEIscUJBQXFCLENBQUMsQ0FBQTtBQUNoRCw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQVFwRDtJQUNJLHNCQUNZLFlBQXlCLEVBQ3pCLGFBQTJCO1FBRDNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRXZDLFNBQUksR0FBUyxJQUFJLENBQUM7SUFEZCxDQUFDO0lBR0wsaUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCw4QkFBTyxHQUFQO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzNFLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3hDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO2lCQUM3QixTQUFTLENBQ04sVUFBQSxJQUFJO2dCQUNBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQTtnQkFDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztZQUN2QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0lBakNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O29CQUFBO0lBOEJGLG1CQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSxvQkFBWSxlQTZCeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vYXV0aC91c2VyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2VcbiAgICApIHsgfVxuICAgIHVzZXI6IFVzZXIgPSBudWxsO1xuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTsgXG4gICAgfVxuICAgIGlzQWRtaW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2F1dGhTZXJ2aWNlLnVzZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UudXNlciA/IHRoaXMuX2F1dGhTZXJ2aWNlLnVzZXIuaXNBZG1pbiA6IGZhbHNlO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5oYXNTaWduZWRJbi5zdWJzY3JpYmUodXNlciA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICB9KVxuICAgICAgICBpZighdGhpcy51c2VyKXtcbiAgICAgICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IGRhdGEub2JqXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hdXRoU2VydmljZS51c2VyID0gdGhpcy51c2VyO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
