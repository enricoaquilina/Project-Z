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
            _this._hubService.hubs = _this.hubs;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBT3JEO0lBR0ksMEJBQ1ksV0FBdUIsRUFDdkIsYUFBMkI7UUFEM0IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDbkMsQ0FBQztJQUVMLG1DQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2FBQ3JCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFFQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV0QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQXpCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDOzt3QkFBQTtJQXNCRix1QkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksd0JBQWdCLG1CQXFCNUIsQ0FBQSIsImZpbGUiOiJodWJzL2h1Yi1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdWJ9IGZyb20gJy4vaHViJztcbmltcG9ydCB7SHViU2VydmljZX0gZnJvbSAnLi9odWIuc2VydmljZSc7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaHViLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnaHViLWxpc3QuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEh1Ykxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgaHViczogSHViW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHViU2VydmljZTogSHViU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5faHViU2VydmljZS5nZXRIdWJzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh1YnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmh1YnMpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9odWJTZXJ2aWNlLmh1YnMgPSB0aGlzLmh1YnM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
