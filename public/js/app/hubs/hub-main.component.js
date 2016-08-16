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
var HubMainComponent = (function () {
    // form: FormGroup;
    function HubMainComponent(_hubService, _errorService, _authService, _fbld, _router) {
        this._hubService = _hubService;
        this._errorService = _errorService;
        this._authService = _authService;
        this._fbld = _fbld;
        this._router = _router;
    }
    HubMainComponent.prototype.onSubmit = function (form) {
        // const hub: Hub = new Hub(form.title, form.description);
        // this._hubService.addHub(hub)
        //     .subscribe(
        //         data => {
        //             this._router.navigate(['/']);
        //         },
        //         error => this._errorService.handleError(error)
        //     );
    };
    // onClick(){
    //     this.hub = null;
    // }
    HubMainComponent.prototype.ngOnInit = function () {
        this.hub = this._hubService.hub;
    };
    HubMainComponent.prototype.isLoggedIn = function () {
        // return this._authService.isLoggedIn();
    };
    HubMainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hub-main',
            templateUrl: 'hub-main.component.html',
        }), 
        __metadata('design:paramtypes', [hub_service_1.HubService, error_service_1.ErrorService, auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], HubMainComponent);
    return HubMainComponent;
}());
exports.HubMainComponent = HubMainComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELDZCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2pELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBT3ZDO0lBQ0ksbUJBQW1CO0lBRW5CLDBCQUNZLFdBQXVCLEVBQ3ZCLGFBQTJCLEVBQzNCLFlBQXlCLEVBQ3pCLEtBQWtCLEVBQ2xCLE9BQWU7UUFKZixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDdkIsQ0FBQztJQUdMLG1DQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2QsMERBQTBEO1FBQzFELCtCQUErQjtRQUMvQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLDRDQUE0QztRQUM1QyxhQUFhO1FBQ2IseURBQXlEO1FBQ3pELFNBQVM7SUFDYixDQUFDO0lBQ0QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixJQUFJO0lBQ0osbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUNELHFDQUFVLEdBQVY7UUFDSSx5Q0FBeUM7SUFDN0MsQ0FBQztJQW5DTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDOzt3QkFBQTtJQWlDRix1QkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1ksd0JBQWdCLG1CQWdDNUIsQ0FBQSIsImZpbGUiOiJodWJzL2h1Yi1tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdWJ9IGZyb20gJy4vaHViJztcbmltcG9ydCB7SHViU2VydmljZX0gZnJvbSAnLi9odWIuc2VydmljZSc7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2h1Yi1tYWluJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2h1Yi1tYWluLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSHViTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICAvLyBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHViU2VydmljZTogSHViU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZmJsZDogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cbiAgICBodWI6IEh1YjtcblxuICAgIG9uU3VibWl0KGZvcm06IGFueSl7ICAgICAgICBcbiAgICAgICAgLy8gY29uc3QgaHViOiBIdWIgPSBuZXcgSHViKGZvcm0udGl0bGUsIGZvcm0uZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyB0aGlzLl9odWJTZXJ2aWNlLmFkZEh1YihodWIpXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAvLyAgICAgKTtcbiAgICB9XG4gICAgLy8gb25DbGljaygpe1xuICAgIC8vICAgICB0aGlzLmh1YiA9IG51bGw7XG4gICAgLy8gfVxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuaHViID0gdGhpcy5faHViU2VydmljZS5odWI7XG4gICAgfVxuICAgIGlzTG9nZ2VkSW4oKXtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
