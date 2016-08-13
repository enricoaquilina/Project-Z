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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.hasSignedIn = new core_1.EventEmitter();
    }
    AuthService.prototype.addUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/user/create', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    // removeUser(user: User){
    //      return this._http.delete('http://localhost:3000/user/' + user.username)
    //         .map(response => response.json())
    //         .catch(error => Observable.throw(error.json()));        
    // }
    AuthService.prototype.signInUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/user/signin', body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        this.user = null;
        this.hasSignedIn.emit(this.user);
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.isAdmin = function () {
        return this.user ? this.user.isAdmin : false;
    };
    AuthService.prototype.updateLoggedUser = function (user) {
        ;
        this.hasSignedIn.emit(user);
    };
    AuthService.prototype.isOwner = function (userId) {
        return localStorage.getItem('userId') == userId;
    };
    AuthService.prototype.updateUser = function (user) {
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,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bUJBQUE7SUFrRGIsa0JBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBO0FBakRZLG1CQUFXLGNBaUR2QixDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vdXNlcic7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNle1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe31cbiAgICB1c2VyOiBVc2VyO1xuICAgIGhhc1NpZ25lZEluID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VyPigpO1xuXG4gICAgYWRkVXNlcih1c2VyOiBVc2VyKXtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvY3JlYXRlJywgYm9keSwge2hlYWRlcnM6aGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIC8vIGxldCB1c2VyID0gbmV3IFVzZXIoZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZCwgZGF0YS5maXJzdE5hbWUsIGRhdGEubGFzdE5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gICAgfVxuICAgIC8vIHJlbW92ZVVzZXIodXNlcjogVXNlcil7XG4gICAgLy8gICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLycgKyB1c2VyLnVzZXJuYW1lKVxuICAgIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTsgICAgICAgIFxuICAgIC8vIH1cbiAgICBzaWduSW5Vc2VyKHVzZXI6IFVzZXIpe1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyL3NpZ25pbicsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG4gICAgbG9nb3V0KCl7XG4gICAgICAgIHRoaXMudXNlciA9IG51bGw7XG4gICAgICAgIHRoaXMuaGFzU2lnbmVkSW4uZW1pdCh0aGlzLnVzZXIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG4gICAgaXNMb2dnZWRJbigpe1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGw7XG4gICAgfVxuICAgIGlzQWRtaW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcj8gdGhpcy51c2VyLmlzQWRtaW46IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVMb2dnZWRVc2VyKHVzZXI6IFVzZXIpeztcbiAgICAgICAgdGhpcy5oYXNTaWduZWRJbi5lbWl0KHVzZXIpO1xuICAgIH1cbiAgICBpc093bmVyKHVzZXJJZDogc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA9PSB1c2VySWQ7XG4gICAgfVxuICAgIHVwZGF0ZVVzZXIodXNlcjogVXNlcil7XG4gICAgICAgIFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
