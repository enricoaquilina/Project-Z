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
        return this._authService.user ? this._authService.user.isAdmin : false;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.hasSignedIn.subscribe(function (user) {
            _this.user = user;
        });
        if (this.user) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCw2QkFBMEIscUJBQXFCLENBQUMsQ0FBQTtBQUNoRCw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQVFwRDtJQUNJLHNCQUNZLFlBQXlCLEVBQ3pCLGFBQTJCO1FBRDNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRXZDLFNBQUksR0FBUyxJQUFJLENBQUM7SUFEZCxDQUFDO0lBR0wsaUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCw4QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDM0UsQ0FBQztJQUNELCtCQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDeEMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUU7aUJBQzdCLFNBQVMsQ0FDTixVQUFBLElBQUk7Z0JBQ0EsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNyQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFoQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzs7b0JBQUE7SUE2QkYsbUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLG9CQUFZLGVBNEJ4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi9hdXRoL3VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZVxuICAgICkgeyB9XG4gICAgdXNlcjogVXNlciA9IG51bGw7XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpOyBcbiAgICB9XG4gICAgaXNBZG1pbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLnVzZXIgPyB0aGlzLl9hdXRoU2VydmljZS51c2VyLmlzQWRtaW4gOiBmYWxzZTtcbiAgICB9XG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UuaGFzU2lnbmVkSW4uc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSlcbiAgICAgICAgaWYoIXRoaXMudXNlcil7XG4gICAgICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyRGV0YWlscygpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhLm9iajtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnVzZXIgPSB0aGlzLnVzZXI7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
