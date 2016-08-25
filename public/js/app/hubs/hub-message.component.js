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
var hubmessage_1 = require('./hubmessage');
var HubMessageComponent = (function () {
    function HubMessageComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hubmessage_1.HubMessage)
    ], HubMessageComponent.prototype, "message", void 0);
    HubMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hub-message',
            templateUrl: 'hub-message.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], HubMessageComponent);
    return HubMessageComponent;
}());
exports.HubMessageComponent = HubMessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsMkJBQXlCLGNBQWMsQ0FBQyxDQUFBO0FBT3hDO0lBQUE7SUFJQSxDQUFDO0lBSEc7UUFBQyxZQUFLLEVBQUU7O3dEQUFBO0lBTlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQzs7MkJBQUE7SUFLRiwwQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksMkJBQW1CLHNCQUkvQixDQUFBIiwiZmlsZSI6Imh1YnMvaHViLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdWJNZXNzYWdlfSBmcm9tICcuL2h1Ym1lc3NhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaHViLW1lc3NhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnaHViLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIdWJNZXNzYWdlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBtZXNzYWdlOiBIdWJNZXNzYWdlO1xuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
