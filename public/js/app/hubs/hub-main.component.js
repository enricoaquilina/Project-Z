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
        this.hubMessages = [];
    }
    HubMainComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.message = new hubmessage_1.HubMessage(form.value.content, this._authService.user.username, this._hubService.hub.title);
        form.reset();
        this._hubService.addHubMessage(this.message)
            .subscribe(function (data) {
            _this._hubService.newMessage.emit(data);
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
                console.log(data);
            }, function (error) { return _this._errorService.handleError(error); });
        });
        this._hubService.newMessage.subscribe(function (messages) {
            _this.hubMessages.push(messages);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDJCQUF5QixjQUFjLENBQUMsQ0FBQTtBQUN4Qyw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCw2QkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQUVqRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQVEvRDtJQU1JLDBCQUNZLFdBQXVCLEVBQ3ZCLGFBQTJCLEVBQzNCLFlBQXlCLEVBQ3pCLEtBQWtCLEVBQ2xCLE9BQWUsRUFDZixLQUFxQjtRQUxyQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVhqQyxnQkFBVyxHQUFpQixFQUFFLENBQUM7SUFZM0IsQ0FBQztJQUdMLG1DQUFRLEdBQVIsVUFBUyxJQUFlO1FBQXhCLGlCQVlDO1FBWEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkMsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXRCRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2hCLE1BQU07YUFDTixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLElBQUksR0FBRyxHQUFHO2dCQUNOLEtBQUssRUFBRSxLQUFLO2FBQ2YsQ0FBQTtZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztpQkFDL0IsU0FBUyxDQUNOLFVBQUEsSUFBSTtnQkFDQSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMxQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQU0sa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QscUNBQVUsR0FBVjtRQUNJLHlDQUF5QztJQUM3QyxDQUFDO0lBQ0QsaUNBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQWhFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDOzt3QkFBQTtJQTZERix1QkFBQztBQUFELENBNURBLEFBNERDLElBQUE7QUE1RFksd0JBQWdCLG1CQTRENUIsQ0FBQSIsImZpbGUiOiJodWJzL2h1Yi1tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdWJ9IGZyb20gJy4vaHViJztcbmltcG9ydCB7SHViU2VydmljZX0gZnJvbSAnLi9odWIuc2VydmljZSc7XG5pbXBvcnQge0h1Yk1lc3NhZ2V9IGZyb20gJy4vaHVibWVzc2FnZSc7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBWYWxpZGF0b3JzfSBmcm9tICcuLi92YWxpZGF0b3JzJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaHViLW1haW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnaHViLW1haW4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIdWJNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGh1Yk1lc3NhZ2VzOiBIdWJNZXNzYWdlW10gPSBbXTtcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBtZXNzYWdlOiBIdWJNZXNzYWdlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2h1YlNlcnZpY2U6IEh1YlNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2ZibGQ6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgfVxuXG5cbiAgICBvblN1Ym1pdChmb3JtOiBGb3JtR3JvdXApeyAgICAgICBcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbmV3IEh1Yk1lc3NhZ2UoZm9ybS52YWx1ZS5jb250ZW50LHRoaXMuX2F1dGhTZXJ2aWNlLnVzZXIudXNlcm5hbWUsIHRoaXMuX2h1YlNlcnZpY2UuaHViLnRpdGxlKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuYWRkSHViTWVzc2FnZSh0aGlzLm1lc3NhZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9odWJTZXJ2aWNlLm5ld01lc3NhZ2UuZW1pdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlWycvaC8nICsgdGhpcy5faHViU2VydmljZS5odWIudGl0bGVdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgICAgIC5wYXJhbXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBwYXJhbXNbJ3RpdGxlJ107XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuZ2V0SHViTWVzc2FnZXMob2JqKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odWJNZXNzYWdlcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5faHViU2VydmljZS5uZXdNZXNzYWdlLnN1YnNjcmliZShtZXNzYWdlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmh1Yk1lc3NhZ2VzLnB1c2gobWVzc2FnZXMpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9mYmxkLmdyb3VwKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFsnJywgWzxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNMb2dnZWRJbigpe1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbiAgICBnb0JhY2soKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
