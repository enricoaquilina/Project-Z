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
var hub_1 = require('./hub');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var router_1 = require('@angular/router');
var HubService = (function () {
    function HubService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.hubs = [];
        this.isEdit = new core_1.EventEmitter();
        this.hub = null;
    }
    HubService.prototype.addHub = function (hub) {
        var body = JSON.stringify(hub);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/hub' + token, body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            var hub = new hub_1.Hub(data.title, data.description, data.owner.username, data._id, data.owner._id);
            return hub;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ;
    HubService.prototype.updateHub = function (hub) {
        var body = JSON.stringify(hub);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch('http://localhost:3000/hub/' + hub.hubId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ;
    HubService.prototype.getHubs = function () {
        return this._http.get('http://localhost:3000/hub')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var hub = new hub_1.Hub(data[i].title, data[i].description, data[i].owner.username, data[i]._id, data[i].owner._id);
                objs.push(hub);
            }
            return data;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ;
    HubService.prototype.editHub = function (hubToUpdate) {
        this._router.navigate(['/hub/update']);
        this.hub = hubToUpdate;
    };
    ;
    HubService.prototype.deleteHub = function (hub) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        // this.messages.splice(this.messages.indexOf(message), 1);
        return this._http.delete('http://localhost:3000/hub/' + hub.hubId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ;
    HubService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], HubService);
    return HubService;
}());
exports.HubService = HubService;

//# sourceMappingURL=data:application/json;base64,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QyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNGLDJEQUEyRDtRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsNEJBQTRCLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDckUsR0FBRyxDQUFDLFVBQVUsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEQsS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7SUF0REw7UUFBQyxpQkFBVSxFQUFFOztrQkFBQTtJQXdEYixpQkFBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFksa0JBQVUsYUF1RHRCLENBQUEiLCJmaWxlIjoiaHVicy9odWIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHVifSBmcm9tICcuL2h1Yic7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHViU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2h0dHA6IEh0dHAsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyICAgICAgICBcbiAgICApe31cbiAgICBodWJzOiBIdWJbXSA9IFtdO1xuICAgIGlzRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8SHViPigpO1xuICAgIGh1YjogSHViID0gbnVsbDtcbiAgICBcbiAgICBhZGRIdWIgKGh1Yikge1xuICAgICAgICB2YXIgYm9keSA9IEpTT04uc3RyaW5naWZ5KGh1Yik7XG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9odWInICsgdG9rZW4sIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAgICAgICAgIHZhciBodWIgPSBuZXcgSHViKGRhdGEudGl0bGUsIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEub3duZXIudXNlcm5hbWUsIGRhdGEuX2lkLCBkYXRhLm93bmVyLl9pZCk7XG4gICAgICAgICAgICByZXR1cm4gaHViO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSk7IH0pO1xuICAgIH07XG4gICAgdXBkYXRlSHViIChodWIpIHtcbiAgICAgICAgdmFyIGJvZHkgPSBKU09OLnN0cmluZ2lmeShodWIpO1xuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2h1Yi8nICsgaHViLmh1YklkICsgdG9rZW4sIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKTsgfSk7XG4gICAgfTtcbiAgICBnZXRIdWJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9odWInKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIG9ianMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBodWIgPSBuZXcgSHViKGRhdGFbaV0udGl0bGUsIGRhdGFbaV0uZGVzY3JpcHRpb24sIGRhdGFbaV0ub3duZXIudXNlcm5hbWUsIGRhdGFbaV0uX2lkLCBkYXRhW2ldLm93bmVyLl9pZCk7XG4gICAgICAgICAgICAgICAgb2Jqcy5wdXNoKGh1Yik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpOyB9KTtcbiAgICB9O1xuICAgIGVkaXRIdWIoaHViVG9VcGRhdGUpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2h1Yi91cGRhdGUnXSk7XG4gICAgICAgIHRoaXMuaHViID0gaHViVG9VcGRhdGU7XG4gICAgfTtcbiAgICBkZWxldGVIdWIoaHViKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlcy5zcGxpY2UodGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaHViLycgKyBodWIuaHViSWQgKyB0b2tlbilcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSk7IH0pO1xuICAgIH07XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
