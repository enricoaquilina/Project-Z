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
            // this._hubService.hubs = this.hubs;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    HubListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hub-list',
            templateUrl: 'hub-list.component.html'
        }), 
        __metadata('design:paramtypes', [hub_service_1.HubService, error_service_1.ErrorService])
    ], HubListComponent);
    return HubListComponent;
}());
exports.HubListComponent = HubListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBT3JEO0lBR0ksMEJBQ1ksV0FBdUIsRUFDdkIsYUFBMkI7UUFEM0IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDbkMsQ0FBQztJQUVMLG1DQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2FBQ3JCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFFQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixxQ0FBcUM7UUFDekMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBeEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7O3dCQUFBO0lBcUJGLHVCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSx3QkFBZ0IsbUJBb0I1QixDQUFBIiwiZmlsZSI6Imh1YnMvaHViLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h1Yn0gZnJvbSAnLi9odWInO1xuaW1wb3J0IHtIdWJTZXJ2aWNlfSBmcm9tICcuL2h1Yi5zZXJ2aWNlJztcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdodWItbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdodWItbGlzdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSHViTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBodWJzOiBIdWJbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9odWJTZXJ2aWNlOiBIdWJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLl9odWJTZXJ2aWNlLmdldEh1YnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHVicyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaHVicyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX2h1YlNlcnZpY2UuaHVicyA9IHRoaXMuaHVicztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
