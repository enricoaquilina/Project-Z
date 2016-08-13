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
var error_service_1 = require('./error.service');
var ErrorComponent = (function () {
    function ErrorComponent(_errorService) {
        this._errorService = _errorService;
        this.currentError = null;
        this.errorDisplay = 'none';
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._errorService.errorOccurred
            .subscribe(function (error) {
            _this.currentError = error;
            _this.errorDisplay = 'block';
        });
    };
    ErrorComponent.prototype.onErrorHandle = function () {
        this.errorDisplay = 'none';
    };
    ErrorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'error-component',
            templateUrl: 'error.component.html',
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "],
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService])
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQWlCN0M7SUFJSSx3QkFBb0IsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFIL0MsaUJBQVksR0FBVSxJQUFJLENBQUM7UUFDM0IsaUJBQVksR0FBWSxNQUFNLENBQUM7SUFFa0IsQ0FBQztJQUVsRCxpQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWE7YUFDL0IsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNaLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELHNDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBOUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsTUFBTSxFQUFFLENBQUMsdU5BU1IsQ0FBQztTQUNMLENBQUM7O3NCQUFBO0lBaUJGLHFCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxzQkFBYyxpQkFnQjFCLENBQUEiLCJmaWxlIjoiZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFcnJvcn0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi9lcnJvci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2Vycm9yLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdlcnJvci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuYmFja2Ryb3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgIGBdLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBjdXJyZW50RXJyb3I6IEVycm9yID0gbnVsbDtcbiAgICBlcnJvckRpc3BsYXkgOiBzdHJpbmcgPSAnbm9uZSc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSl7fVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5fZXJyb3JTZXJ2aWNlLmVycm9yT2NjdXJyZWRcbiAgICAgICAgLnN1YnNjcmliZShlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgdGhpcy5lcnJvckRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBvbkVycm9ySGFuZGxlKCl7XG4gICAgICAgIHRoaXMuZXJyb3JEaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
