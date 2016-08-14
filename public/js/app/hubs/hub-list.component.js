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
var hub_component_1 = require('./hub.component');
var hub_service_1 = require('./hub.service');
var error_service_1 = require('../errors/error.service');
var HubListComponent = (function () {
    function HubListComponent(_hubService, _errorService) {
        this._hubService = _hubService;
        this._errorService = _errorService;
    }
    HubListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._hubService.getHubs()
            .subscribe(function (data) {
            _this.hubs = data;
            console.log(_this.hubs);
            _this._hubService.hubs = _this.hubs;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    HubListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hub-list',
            templateUrl: 'hub-list.component.html',
            directives: [hub_component_1.HubComponent]
        }), 
        __metadata('design:paramtypes', [hub_service_1.HubService, error_service_1.ErrorService])
    ], HubListComponent);
    return HubListComponent;
}());
exports.HubListComponent = HubListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBUXJEO0lBR0ksMEJBQ1ksV0FBdUIsRUFDdkIsYUFBMkI7UUFEM0IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDbkMsQ0FBQztJQUVMLG1DQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2FBQ3JCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFFQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV0QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQTFCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxVQUFVLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzdCLENBQUM7O3dCQUFBO0lBc0JGLHVCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSx3QkFBZ0IsbUJBcUI1QixDQUFBIiwiZmlsZSI6Imh1YnMvaHViLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h1YkNvbXBvbmVudH0gZnJvbSAnLi9odWIuY29tcG9uZW50JztcbmltcG9ydCB7SHVifSBmcm9tICcuL2h1Yic7XG5pbXBvcnQge0h1YlNlcnZpY2V9IGZyb20gJy4vaHViLnNlcnZpY2UnO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2h1Yi1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2h1Yi1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbSHViQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBIdWJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGh1YnM6IEh1YltdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2h1YlNlcnZpY2U6IEh1YlNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuX2h1YlNlcnZpY2UuZ2V0SHVicygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odWJzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5odWJzKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faHViU2VydmljZS5odWJzID0gdGhpcy5odWJzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
