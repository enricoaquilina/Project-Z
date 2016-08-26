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
var hubmessage_1 = require('./hubmessage');
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
        var _this = this;
        var message = new hubmessage_1.HubMessage(form.content, this._authService.user.username, this._hubService.hub.title);
        console.log(message);
        this._hubService.addHubMessage(message)
            .subscribe(function (data) {
            data;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    HubMainComponent.prototype.ngOnInit = function () {
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var title = params['title'];
            var obj = {
                title: title
            };
            // this._hubService.getHubMessages(obj)
            // .subscribe(
            //     data => {
            //         this.hubMessages = data;
            //     },
            //     error => this._errorService.handleError(error)
            // );
        });
        this.form = this._fbld.group({
            content: ['', [forms_1.Validators.required]],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDJCQUF5QixjQUFjLENBQUMsQ0FBQTtBQUN4Qyw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCw2QkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQUVqRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQVEvRDtJQU1JLDBCQUNZLFdBQXVCLEVBQ3ZCLGFBQTJCLEVBQzNCLFlBQXlCLEVBQ3pCLEtBQWtCLEVBQ2xCLE9BQWUsRUFDZixLQUFxQjtRQUxyQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUM3QixDQUFDO0lBR0wsbUNBQVEsR0FBUixVQUFTLElBQVM7UUFBbEIsaUJBYUM7UUFaRyxJQUFNLE9BQU8sR0FBZSxJQUFJLHVCQUFVLENBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzthQUNsQyxTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsSUFBSSxDQUFBO1FBQ1IsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDaEIsTUFBTTthQUNOLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDYixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsSUFBSSxHQUFHLEdBQUc7Z0JBQ04sS0FBSyxFQUFFLEtBQUs7YUFDZixDQUFBO1lBRUQsdUNBQXVDO1lBQ3ZDLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsbUNBQW1DO1lBQ25DLFNBQVM7WUFDVCxxREFBcUQ7WUFDckQsS0FBSztRQUNiLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBTSxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxxQ0FBVSxHQUFWO1FBQ0kseUNBQXlDO0lBQzdDLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBOURMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7O3dCQUFBO0lBMkRGLHVCQUFDO0FBQUQsQ0ExREEsQUEwREMsSUFBQTtBQTFEWSx3QkFBZ0IsbUJBMEQ1QixDQUFBIiwiZmlsZSI6Imh1YnMvaHViLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h1Yn0gZnJvbSAnLi9odWInO1xuaW1wb3J0IHtIdWJTZXJ2aWNlfSBmcm9tICcuL2h1Yi5zZXJ2aWNlJztcbmltcG9ydCB7SHViTWVzc2FnZX0gZnJvbSAnLi9odWJtZXNzYWdlJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0FwcFZhbGlkYXRvcnN9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdodWItbWFpbicsXG4gICAgdGVtcGxhdGVVcmw6ICdodWItbWFpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEh1Yk1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgLy8gZm9ybTogRm9ybUdyb3VwO1xuICAgIGh1Yk1lc3NhZ2VzOiBIdWJNZXNzYWdlW107XG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHViU2VydmljZTogSHViU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZmJsZDogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cblxuICAgIG9uU3VibWl0KGZvcm06IGFueSl7ICAgICAgIFxuICAgICAgICBjb25zdCBtZXNzYWdlOiBIdWJNZXNzYWdlID0gbmV3IEh1Yk1lc3NhZ2UoXG4gICAgICAgICAgICBmb3JtLmNvbnRlbnQsXG4gICAgICAgICAgICB0aGlzLl9hdXRoU2VydmljZS51c2VyLnVzZXJuYW1lLCBcbiAgICAgICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuaHViLnRpdGxlKTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuYWRkSHViTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgICAgIC5wYXJhbXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBwYXJhbXNbJ3RpdGxlJ107XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5faHViU2VydmljZS5nZXRIdWJNZXNzYWdlcyhvYmopXG4gICAgICAgICAgICAgICAgLy8gLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAvLyAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmh1Yk1lc3NhZ2VzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgIC8vICk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9mYmxkLmdyb3VwKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFsnJywgWzxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNMb2dnZWRJbigpe1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbiAgICBnb0JhY2soKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
