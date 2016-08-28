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
            console.log(data);
            _this._router.navigate['/h/' + _this._hubService.hub.title];
        }, function (error) { return _this._errorService.handleError(error); });
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
            _this._hubService.getHubMessages(obj)
                .subscribe(function (data) {
                _this.hubMessages = data;
            }, function (error) { return _this._errorService.handleError(error); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDJCQUF5QixjQUFjLENBQUMsQ0FBQTtBQUN4Qyw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCw2QkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQUVqRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQVEvRDtJQU1JLDBCQUNZLFdBQXVCLEVBQ3ZCLGFBQTJCLEVBQzNCLFlBQXlCLEVBQ3pCLEtBQWtCLEVBQ2xCLE9BQWUsRUFDZixLQUFxQjtRQUxyQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUM3QixDQUFDO0lBR0wsbUNBQVEsR0FBUixVQUFTLElBQVM7UUFBbEIsaUJBY0M7UUFiRyxJQUFNLE9BQU8sR0FBZSxJQUFJLHVCQUFVLENBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzthQUNsQyxTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQW1CQztRQWxCRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2hCLE1BQU07YUFDTixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLElBQUksR0FBRyxHQUFHO2dCQUNOLEtBQUssRUFBRSxLQUFLO2FBQ2YsQ0FBQTtZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztpQkFDL0IsU0FBUyxDQUNOLFVBQUEsSUFBSTtnQkFDQSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUM1QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBTSxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxxQ0FBVSxHQUFWO1FBQ0kseUNBQXlDO0lBQzdDLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBOURMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7O3dCQUFBO0lBMkRGLHVCQUFDO0FBQUQsQ0ExREEsQUEwREMsSUFBQTtBQTFEWSx3QkFBZ0IsbUJBMEQ1QixDQUFBIiwiZmlsZSI6Imh1YnMvaHViLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h1Yn0gZnJvbSAnLi9odWInO1xuaW1wb3J0IHtIdWJTZXJ2aWNlfSBmcm9tICcuL2h1Yi5zZXJ2aWNlJztcbmltcG9ydCB7SHViTWVzc2FnZX0gZnJvbSAnLi9odWJtZXNzYWdlJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0FwcFZhbGlkYXRvcnN9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdodWItbWFpbicsXG4gICAgdGVtcGxhdGVVcmw6ICdodWItbWFpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEh1Yk1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgLy8gZm9ybTogRm9ybUdyb3VwO1xuICAgIGh1Yk1lc3NhZ2VzOiBIdWJNZXNzYWdlW107XG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHViU2VydmljZTogSHViU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZmJsZDogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cblxuICAgIG9uU3VibWl0KGZvcm06IGFueSl7ICAgICAgIFxuICAgICAgICBjb25zdCBtZXNzYWdlOiBIdWJNZXNzYWdlID0gbmV3IEh1Yk1lc3NhZ2UoXG4gICAgICAgICAgICBmb3JtLmNvbnRlbnQsXG4gICAgICAgICAgICB0aGlzLl9hdXRoU2VydmljZS51c2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgdGhpcy5faHViU2VydmljZS5odWIudGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5faHViU2VydmljZS5hZGRIdWJNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlWycvaC8nICsgdGhpcy5faHViU2VydmljZS5odWIudGl0bGVdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgICAgIC5wYXJhbXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBwYXJhbXNbJ3RpdGxlJ107XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuZ2V0SHViTWVzc2FnZXMob2JqKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odWJNZXNzYWdlcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fZmJsZC5ncm91cCh7XG4gICAgICAgICAgICBjb250ZW50OiBbJycsIFs8YW55PlZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzTG9nZ2VkSW4oKXtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG4gICAgZ29CYWNrKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
