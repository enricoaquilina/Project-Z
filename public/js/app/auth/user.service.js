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
var user_1 = require('./user');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var router_1 = require('@angular/router');
var UserService = (function () {
    function UserService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.user = null;
    }
    // getUsers() {
    //     return this._http.get('http://localhost:3000/user')
    //         .map(function(response){
    //             var data = response.json().obj;
    //             var users = [];
    //             for (var i=0;i<data.length;i++){
    //                 var user = new User(
    //                     data[i].username,'',data[i].email, 
    //                     data[i].firstName, data[i].lastName);
    //                 users.push(user);
    //             }
    //             return users;
    //         })
    //         .catch(function (error){
    //             return Observable.throw(error.json());
    //         })
    // }
    UserService.prototype.getUsers = function () {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.get('http://localhost:3000/user' + token)
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var user = new user_1.User(data[i].username, '', data[i].email, data[i].firstName, data[i].lastName, data[i].isAdmin);
                objs.push(user);
            }
            return objs;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ;
    UserService.prototype.deleteUser = function (user) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        // this.messages.splice(this.messages.indexOf(message), 1);
        return this._http.delete('http://localhost:3000/user/' + user.username + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    UserService.prototype.editUser = function (userToUpdate) {
        this._router.navigate(['/user/update']);
        this.user = userToUpdate;
    };
    UserService.prototype.updateUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch('http://localhost:3000/user/' + user.username + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;base64,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OlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi91c2VyJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgdXNlcjogVXNlciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHR0cDogSHR0cCxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgICApIHsgfVxuXG4gICAgLy8gZ2V0VXNlcnMoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXInKVxuICAgIC8vICAgICAgICAgLm1hcChmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgIC8vICAgICAgICAgICAgIHZhciB1c2VycyA9IFtdO1xuICAgIC8vICAgICAgICAgICAgIGZvciAodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciB1c2VyID0gbmV3IFVzZXIoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnVzZXJuYW1lLCcnLGRhdGFbaV0uZW1haWwsIFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5maXJzdE5hbWUsIGRhdGFbaV0ubGFzdE5hbWUpO1xuICAgIC8vICAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKHVzZXIpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcil7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKTtcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gfVxuICAgIGdldFVzZXJzKCkge1xuICAgICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXInICsgdG9rZW4pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICAgICAgdmFyIG9ianMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gbmV3IFVzZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnVzZXJuYW1lLCcnLGRhdGFbaV0uZW1haWwsIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5maXJzdE5hbWUsIGRhdGFbaV0ubGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmlzQWRtaW4pO1xuICAgICAgICAgICAgICAgIG9ianMucHVzaCh1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmpzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSk7IH0pO1xuICAgIH07XG4gICAgZGVsZXRlVXNlcih1c2VyKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcbiAgICAgICAgIC8vIHRoaXMubWVzc2FnZXMuc3BsaWNlKHRoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvJyArIHVzZXIudXNlcm5hbWUgKyB0b2tlbilcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSk7IH0pO1xuICAgIH1cbiAgICBlZGl0VXNlcih1c2VyVG9VcGRhdGUpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3VzZXIvdXBkYXRlJ10pO1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyVG9VcGRhdGU7XG4gICAgfVxuICAgIHVwZGF0ZVVzZXIodXNlcil7XG4gICAgICAgIHZhciBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci8nICsgdXNlci51c2VybmFtZSArIHRva2VuLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSk7IH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
