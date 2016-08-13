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
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/user/signin', body, { headers: headers })
            .map(function (response) {
            _this.user = response.json();
            return response.json();
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.isAdmin = function () {
        return this.user ? this.user.isAdmin : false;
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

//# sourceMappingURL=data:application/json;base64,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YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vdXNlcic7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNle1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe31cbiAgICB1c2VyOiBVc2VyO1xuXG4gICAgYWRkVXNlcih1c2VyOiBVc2VyKXtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvY3JlYXRlJywgYm9keSwge2hlYWRlcnM6aGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIC8vIGxldCB1c2VyID0gbmV3IFVzZXIoZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZCwgZGF0YS5maXJzdE5hbWUsIGRhdGEubGFzdE5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gICAgfVxuICAgIC8vIHJlbW92ZVVzZXIodXNlcjogVXNlcil7XG4gICAgLy8gICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLycgKyB1c2VyLnVzZXJuYW1lKVxuICAgIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTsgICAgICAgIFxuICAgIC8vIH1cbiAgICBzaWduSW5Vc2VyKHVzZXI6IFVzZXIpe1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyL3NpZ25pbicsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgIH1cbiAgICBsb2dvdXQoKXtcbiAgICAgICAgdGhpcy51c2VyID0gbnVsbDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxuICAgIGlzTG9nZ2VkSW4oKXtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9PSBudWxsO1xuICAgIH1cbiAgICBpc0FkbWluKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXI/IHRoaXMudXNlci5pc0FkbWluOiBmYWxzZTtcbiAgICB9XG4gICAgaXNPd25lcih1c2VySWQ6IHN0cmluZyl7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPT0gdXNlcklkO1xuICAgIH1cbiAgICB1cGRhdGVVc2VyKHVzZXI6IFVzZXIpe1xuICAgICAgICBcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
