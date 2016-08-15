import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {ErrorService} from './errors/error.service';
import {User} from './auth/user';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        private _authService: AuthService,
        private _errorService: ErrorService
    ) { }
    user: User = null;

    isLoggedIn() {
        return this._authService.isLoggedIn(); 
    }
    isAdmin() {
        // console.log(this._authService.user);
        return this._authService.user ? this._authService.user.isAdmin : false;
    }
    ngOnInit(){
        this._authService.hasSignedIn.subscribe(user => {
            this.user = user;
        })
    }
}