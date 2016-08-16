import {Component, OnInit} from '@angular/core';
import {Hub} from './hub';
import {HubService} from './hub.service';
import {ErrorService} from '../errors/error.service';
import {AuthService} from '../auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'hub-main',
    templateUrl: 'hub-main.component.html',
})
export class HubMainComponent implements OnInit{
    // form: FormGroup;

    constructor(
        private _hubService: HubService,
        private _errorService: ErrorService,
        private _authService: AuthService,
        private _fbld: FormBuilder,
        private _router: Router
    ) { }
    hub: Hub;

    onSubmit(form: any){        
        // const hub: Hub = new Hub(form.title, form.description);
        // this._hubService.addHub(hub)
        //     .subscribe(
        //         data => {
        //             this._router.navigate(['/']);
        //         },
        //         error => this._errorService.handleError(error)
        //     );
    }
    // onClick(){
    //     this.hub = null;
    // }
    ngOnInit(){
        this.hub = this._hubService.hub;
    }
    isLoggedIn(){
        // return this._authService.isLoggedIn();
    }

}