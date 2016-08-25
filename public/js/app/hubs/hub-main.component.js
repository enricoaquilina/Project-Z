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
    function HubMainComponent(_hubService, _errorService, _authService, _fbld, _router, route) {
        this._hubService = _hubService;
        this._errorService = _errorService;
        this._authService = _authService;
        this._fbld = _fbld;
        this._router = _router;
        this.route = route;
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
    HubMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var title = params['title'];
            var obj = {
                title: title
            };
            // _this._hubService.getHubMessages(obj)
            //     .subscribe(function (data) {
            //     _this.hubMessages = data;
            // }, function (error) { return _this._errorService.handleError(error); });
        });
    };
    HubMainComponent.prototype.isLoggedIn = function () {
        // return this._authService.isLoggedIn();
    };
    HubMainComponent.prototype.goBack = function () {
        window.history.back();
    };
    HubMainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hub-main',
            templateUrl: 'hub-main.component.html',
        }), 
        __metadata('design:paramtypes', [hub_service_1.HubService, error_service_1.ErrorService, auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute])
    ], HubMainComponent);
    return HubMainComponent;
}());
exports.HubMainComponent = HubMainComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELDZCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2pELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLHVCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBUS9EO0lBS0ksMEJBQ1ksV0FBdUIsRUFDdkIsYUFBMkIsRUFDM0IsWUFBeUIsRUFDekIsS0FBa0IsRUFDbEIsT0FBZSxFQUNmLEtBQXFCO1FBTHJCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFHTCxtQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNkLDBEQUEwRDtRQUMxRCwrQkFBK0I7UUFDL0Isa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQiw0Q0FBNEM7UUFDNUMsYUFBYTtRQUNiLHlEQUF5RDtRQUN6RCxTQUFTO0lBQ2IsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSzthQUNoQixNQUFNO2FBQ04sU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixJQUFJLEdBQUcsR0FBRztnQkFDTixLQUFLLEVBQUUsS0FBSzthQUNmLENBQUE7WUFFRCxLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7aUJBQ25DLFNBQVMsQ0FDTixVQUFBLElBQUk7Z0JBQ0EsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDNUIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxxQ0FBVSxHQUFWO1FBQ0kseUNBQXlDO0lBQzdDLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBdERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7O3dCQUFBO0lBbURGLHVCQUFDO0FBQUQsQ0FsREEsQUFrREMsSUFBQTtBQWxEWSx3QkFBZ0IsbUJBa0Q1QixDQUFBIiwiZmlsZSI6Imh1YnMvaHViLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h1Yn0gZnJvbSAnLi9odWInO1xuaW1wb3J0IHtIdWJTZXJ2aWNlfSBmcm9tICcuL2h1Yi5zZXJ2aWNlJztcbmltcG9ydCB7SHViTWVzc2FnZX0gZnJvbSAnLi9odWJtZXNzYWdlJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2h1Yi1tYWluJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2h1Yi1tYWluLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSHViTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICAvLyBmb3JtOiBGb3JtR3JvdXA7XG4gICAgaHViTWVzc2FnZXM6IEh1Yk1lc3NhZ2VbXTtcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2h1YlNlcnZpY2U6IEh1YlNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2ZibGQ6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgfVxuXG5cbiAgICBvblN1Ym1pdChmb3JtOiBhbnkpeyAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IGh1YjogSHViID0gbmV3IEh1Yihmb3JtLnRpdGxlLCBmb3JtLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8gdGhpcy5faHViU2VydmljZS5hZGRIdWIoaHViKVxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShcbiAgICAgICAgLy8gICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgLy8gICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlXG4gICAgICAgICAgICAucGFyYW1zXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gcGFyYW1zWyd0aXRsZSddO1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuZ2V0SHViTWVzc2FnZXMob2JqKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odWJNZXNzYWdlcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9KTsgXG4gICAgfVxuICAgIGlzTG9nZ2VkSW4oKXtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG4gICAgZ29CYWNrKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
