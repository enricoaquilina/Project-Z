import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Hub} from './hub';
import {HubService} from './hub.service';
import {AuthService} from '../auth/auth.service';
import {ErrorService} from '../errors/error.service';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'hub-area',
    templateUrl: 'hub.component.html',
    styleUrls: ['hub.component.css'],

})
export class HubComponent{
    @Input() hub: Hub;
    @Output() editClicked = new EventEmitter<Hub>();

    constructor(
        private _hubService: HubService, 
        private _authService: AuthService, 
        private _errorService: ErrorService,
        private _router: Router
    ){};

    color = 'white';
    show = true;

    editHub(){
        this._hubService.editHub(this.hub);
    }
    deleteHub(){
        this._hubService.deleteHub(this.hub)
            .subscribe(
                data => this._router.navigate(['/']),
                error => this._errorService.handleError(error)
            );
    }
    viewHub(){

    }
    subscribeHub(){

    }
    isOwner(){
        return this._authService.isOwner(this.hub.ownerId);
    }
}