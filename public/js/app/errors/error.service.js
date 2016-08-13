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
var error_1 = require('./error');
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccurred = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new error_1.Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    };
    ErrorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ErrorService);
    return ErrorService;
}());
exports.ErrorService = ErrorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsc0JBQW9CLFNBQVMsQ0FBQyxDQUFBO0FBRzlCO0lBQUE7UUFDSSxrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBUyxDQUFDO0lBTTlDLENBQUM7SUFKRyxrQ0FBVyxHQUFYLFVBQVksS0FBVTtRQUNsQixJQUFNLFNBQVMsR0FBRyxJQUFJLGFBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQVBMO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFRYixtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksb0JBQVksZUFPeEIsQ0FBQSIsImZpbGUiOiJlcnJvcnMvZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RXJyb3J9IGZyb20gJy4vZXJyb3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JTZXJ2aWNle1xuICAgIGVycm9yT2NjdXJyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xuXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSl7XG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IG5ldyBFcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZXJyb3JPY2N1cnJlZC5lbWl0KGVycm9yRGF0YSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
