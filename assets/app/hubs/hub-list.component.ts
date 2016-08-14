import {Component, OnInit} from '@angular/core';
import {HubComponent} from './hub.component';
import {Hub} from './hub';
import {HubService} from './hub.service';
import {ErrorService} from '../errors/error.service';

@Component({
    moduleId: module.id,
    selector: 'hub-list',
    templateUrl: 'hub-list.component.html',
    directives: [HubComponent]
})
export class HubListComponent implements OnInit{
    hubs: Hub[];

    constructor(
        private _hubService: HubService,
        private _errorService: ErrorService
    ) { }

    ngOnInit(){
        this._hubService.getHubs()
            .subscribe(
                data => {
                    
                    this.hubs = data;
                    console.log(this.hubs)
                    
                    this._hubService.hubs = this.hubs;
                },
                error => this._errorService.handleError(error)
            );
    }
}