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
    AuthService.prototype.getUserDetails = function () {
        //get user details again after refresh using his id
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';
        var identifierObject = {
            userId: userId
        };
        var body = JSON.stringify(identifierObject);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/user' + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.isAdmin = function () {
        return this.user ? this.user.isAdmin : false;
    };
    AuthService.prototype.updateLoggedUser = function (user) {
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

//# sourceMappingURL=data:application/json;base64,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QUMsS0FBSyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQzFFLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxnQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDO0lBQ2xELENBQUM7SUFDRCw2QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUUsS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFDRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBVTtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsNkJBQU8sR0FBUCxVQUFRLE1BQWM7UUFDbEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDO0lBQ3BELENBQUM7SUFDRCxnQ0FBVSxHQUFWLFVBQVcsSUFBVTtJQUVyQixDQUFDO0lBL0RMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFnRWIsa0JBQUM7QUFBRCxDQS9EQSxBQStEQyxJQUFBO0FBL0RZLG1CQUFXLGNBK0R2QixDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vdXNlcic7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNle1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe31cbiAgICB1c2VyOiBVc2VyO1xuICAgIGhhc1NpZ25lZEluID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VyPigpO1xuXG4gICAgYWRkVXNlcih1c2VyOiBVc2VyKXtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvY3JlYXRlJywgYm9keSwge2hlYWRlcnM6aGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIC8vIGxldCB1c2VyID0gbmV3IFVzZXIoZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZCwgZGF0YS5maXJzdE5hbWUsIGRhdGEubGFzdE5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gICAgfVxuICAgIC8vIHJlbW92ZVVzZXIodXNlcjogVXNlcil7XG4gICAgLy8gICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLycgKyB1c2VyLnVzZXJuYW1lKVxuICAgIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTsgICAgICAgIFxuICAgIC8vIH1cbiAgICBzaWduSW5Vc2VyKHVzZXI6IFVzZXIpe1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyL3NpZ25pbicsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG4gICAgbG9nb3V0KCl7XG4gICAgICAgIHRoaXMudXNlciA9IG51bGw7XG4gICAgICAgIHRoaXMuaGFzU2lnbmVkSW4uZW1pdCh0aGlzLnVzZXIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG4gICAgZ2V0VXNlckRldGFpbHMoKXtcbiAgICAgICAgLy9nZXQgdXNlciBkZXRhaWxzIGFnYWluIGFmdGVyIHJlZnJlc2ggdXNpbmcgaGlzIGlkXG4gICAgICAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcbiAgICAgICAgdmFyIHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA6ICcnO1xuICAgICAgICB2YXIgaWRlbnRpZmllck9iamVjdCA9IHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGlkZW50aWZpZXJPYmplY3QpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyJyArIHRva2VuLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7ICAgIFxuICAgIH1cbiAgICBpc0xvZ2dlZEluKCl7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAhPT0gbnVsbDtcbiAgICB9XG4gICAgaXNBZG1pbigpe1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyPyB0aGlzLnVzZXIuaXNBZG1pbjogZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZUxvZ2dlZFVzZXIodXNlcjogVXNlcil7XG4gICAgICAgIHRoaXMuaGFzU2lnbmVkSW4uZW1pdCh1c2VyKTtcbiAgICB9XG4gICAgaXNPd25lcih1c2VySWQ6IHN0cmluZyl7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPT0gdXNlcklkO1xuICAgIH1cbiAgICB1cGRhdGVVc2VyKHVzZXI6IFVzZXIpe1xuICAgICAgICBcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
