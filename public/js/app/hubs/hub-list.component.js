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
            // this._hubService.hubs = this.hubs;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBUXJEO0lBR0ksMEJBQ1ksV0FBdUIsRUFDdkIsYUFBMkI7UUFEM0IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDbkMsQ0FBQztJQUVMLG1DQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2FBQ3JCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixxQ0FBcUM7UUFDekMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBdkJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFVBQVUsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDN0IsQ0FBQzs7d0JBQUE7SUFtQkYsdUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLHdCQUFnQixtQkFrQjVCLENBQUEiLCJmaWxlIjoiaHVicy9odWItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHViQ29tcG9uZW50fSBmcm9tICcuL2h1Yi5jb21wb25lbnQnO1xuaW1wb3J0IHtIdWJ9IGZyb20gJy4vaHViJztcbmltcG9ydCB7SHViU2VydmljZX0gZnJvbSAnLi9odWIuc2VydmljZSc7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaHViLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnaHViLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtIdWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEh1Ykxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgaHViczogSHViW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHViU2VydmljZTogSHViU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5faHViU2VydmljZS5nZXRIdWJzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHVicyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX2h1YlNlcnZpY2UuaHVicyA9IHRoaXMuaHVicztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
