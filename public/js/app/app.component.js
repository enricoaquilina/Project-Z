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
        // console.log(this._authService.user);
        return this._authService.user ? this._authService.user.isAdmin : false;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.hasSignedIn.subscribe(function (user) {
            _this.user = user;
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCw2QkFBMEIscUJBQXFCLENBQUMsQ0FBQTtBQUNoRCw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQVFwRDtJQUNJLHNCQUNZLFlBQXlCLEVBQ3pCLGFBQTJCO1FBRDNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRXZDLFNBQUksR0FBUyxJQUFJLENBQUM7SUFEZCxDQUFDO0lBR0wsaUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCw4QkFBTyxHQUFQO1FBQ0ksdUNBQXVDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzNFLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3hDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXZCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDOztvQkFBQTtJQW9CRixtQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksb0JBQVksZUFtQnhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuL2F1dGgvdXNlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlXG4gICAgKSB7IH1cbiAgICB1c2VyOiBVc2VyID0gbnVsbDtcblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7IFxuICAgIH1cbiAgICBpc0FkbWluKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9hdXRoU2VydmljZS51c2VyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLnVzZXIgPyB0aGlzLl9hdXRoU2VydmljZS51c2VyLmlzQWRtaW4gOiBmYWxzZTtcbiAgICB9XG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UuaGFzU2lnbmVkSW4uc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSlcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
