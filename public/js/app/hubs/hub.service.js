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
        this.hubViewEvt = new core_1.EventEmitter();
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
    HubService.prototype.addHubMessage = function (hubMessage) {
        var body = JSON.stringify(hubMessage);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/hub/message' + token, body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            console.log(data);
            // var hub = new HubMessage(data.content,data.);
            return data;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
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
            return objs;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ;
    HubService.prototype.getHubMessages = function (hubTitle) {
        // const body = JSON.stringify(hubTitle);
        // const headers = new Headers({'Content-Type': 'application/json'});
        // var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        // return this._http.post('http://localhost:3000/hubMessages'+ token, body, {headers: headers})
        //     .map(response => 
        //         response.json()
        //     )
        //     .catch(error => Observable.throw(error.json()));
    };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1YnMvaHViLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCxvQkFBa0IsT0FBTyxDQUFDLENBQUE7QUFFMUIscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUl2QztJQUNJLG9CQUNZLEtBQVcsRUFDWCxPQUFlO1FBRGYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFFM0IsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFDakMsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO1FBRXJDLFFBQUcsR0FBUSxJQUFJLENBQUM7SUFMZCxDQUFDO0lBT0gsMkJBQU0sR0FBTixVQUFRLEdBQUc7UUFDUCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzRixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNsRixHQUFHLENBQUMsVUFBVSxRQUFRO1lBQ3ZCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxTQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvRixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7SUFDRCxrQ0FBYSxHQUFiLFVBQWMsVUFBVTtRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzRixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUMxRixHQUFHLENBQUMsVUFBVSxRQUFRO1lBQ3ZCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixnREFBZ0Q7WUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFXLEdBQUc7UUFDVixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzRixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ2hHLEdBQUcsQ0FBQyxVQUFVLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BELEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7O0lBQ0QsNEJBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQzthQUM3QyxHQUFHLENBQUMsVUFBVSxRQUFRO1lBQ3ZCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFFL0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25DLElBQUksR0FBRyxHQUFHLElBQUksU0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7SUFDRCxtQ0FBYyxHQUFkLFVBQWUsUUFBUTtRQUNuQix5Q0FBeUM7UUFDekMscUVBQXFFO1FBQ3JFLDhGQUE4RjtRQUU5RiwrRkFBK0Y7UUFDL0Ysd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQixRQUFRO1FBQ1IsdURBQXVEO0lBQzNELENBQUM7SUFDRCw0QkFBTyxHQUFQLFVBQVEsV0FBVztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQztJQUMzQixDQUFDOztJQUNELDhCQUFTLEdBQVQsVUFBVSxHQUFHO1FBQ1QsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0YsMkRBQTJEO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNyRSxHQUFHLENBQUMsVUFBVSxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRCxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOztJQWpGTDtRQUFDLGlCQUFVLEVBQUU7O2tCQUFBO0lBbUZiLGlCQUFDO0FBQUQsQ0FsRkEsQUFrRkMsSUFBQTtBQWxGWSxrQkFBVSxhQWtGdEIsQ0FBQSIsImZpbGUiOiJodWJzL2h1Yi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdWJ9IGZyb20gJy4vaHViJztcbmltcG9ydCB7SHViTWVzc2FnZX0gZnJvbSAnLi9odWJtZXNzYWdlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh1YlNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9odHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciAgICAgICAgXG4gICAgKXt9XG4gICAgaHViczogSHViW10gPSBbXTtcbiAgICBpc0VkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPEh1Yj4oKTtcbiAgICBodWJWaWV3RXZ0ID0gbmV3IEV2ZW50RW1pdHRlcjxIdWI+KCk7XG5cbiAgICBodWI6IEh1YiA9IG51bGw7XG4gICAgXG4gICAgYWRkSHViIChodWIpIHtcbiAgICAgICAgdmFyIGJvZHkgPSBKU09OLnN0cmluZ2lmeShodWIpO1xuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaHViJyArIHRva2VuLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG4gICAgICAgICAgICB2YXIgaHViID0gbmV3IEh1YihkYXRhLnRpdGxlLCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLm93bmVyLnVzZXJuYW1lLCBkYXRhLl9pZCwgZGF0YS5vd25lci5faWQpO1xuICAgICAgICAgICAgcmV0dXJuIGh1YjtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpOyB9KTtcbiAgICB9O1xuICAgIGFkZEh1Yk1lc3NhZ2UoaHViTWVzc2FnZSkge1xuICAgICAgICB2YXIgYm9keSA9IEpTT04uc3RyaW5naWZ5KGh1Yk1lc3NhZ2UpO1xuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaHViL21lc3NhZ2UnICsgdG9rZW4sIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gdmFyIGh1YiA9IG5ldyBIdWJNZXNzYWdlKGRhdGEuY29udGVudCxkYXRhLik7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpOyB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVIdWIgKGh1Yikge1xuICAgICAgICB2YXIgYm9keSA9IEpTT04uc3RyaW5naWZ5KGh1Yik7XG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaHViLycgKyBodWIuaHViSWQgKyB0b2tlbiwgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpOyB9KTtcbiAgICB9O1xuICAgIGdldEh1YnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2h1YicpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgb2JqcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGh1YiA9IG5ldyBIdWIoZGF0YVtpXS50aXRsZSwgZGF0YVtpXS5kZXNjcmlwdGlvbiwgZGF0YVtpXS5vd25lci51c2VybmFtZSwgZGF0YVtpXS5faWQsIGRhdGFbaV0ub3duZXIuX2lkKTtcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2goaHViKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmpzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSk7IH0pO1xuICAgIH07XG4gICAgZ2V0SHViTWVzc2FnZXMoaHViVGl0bGUpIHtcbiAgICAgICAgLy8gY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGh1YlRpdGxlKTtcbiAgICAgICAgLy8gY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIC8vIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcblxuICAgICAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaHViTWVzc2FnZXMnKyB0b2tlbiwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAvLyAgICAgLm1hcChyZXNwb25zZSA9PiBcbiAgICAgICAgLy8gICAgICAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgLy8gICAgIClcbiAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgIH1cbiAgICBlZGl0SHViKGh1YlRvVXBkYXRlKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9odWIvdXBkYXRlJ10pO1xuICAgICAgICB0aGlzLmh1YiA9IGh1YlRvVXBkYXRlO1xuICAgIH07XG4gICAgZGVsZXRlSHViKGh1Yikge1xuICAgICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XG4gICAgICAgIC8vIHRoaXMubWVzc2FnZXMuc3BsaWNlKHRoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2h1Yi8nICsgaHViLmh1YklkICsgdG9rZW4pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpOyB9KTtcbiAgICB9O1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
