import {Component, OnInit, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AuthService} from './auth/auth.service';
import {ErrorComponent} from './errors/error.component';
import {ErrorService} from './errors/error.service';
import {User} from './auth/user';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, ErrorComponent]
})
export class AppComponent implements OnInit{
    constructor(
        private _authService: AuthService,
        private _errorService: ErrorService
    ) { }
    @Input() user: User;

    ngOnInit(){
        this.user = this._authService.user ? this._authService.user : new User('','');
    }
    isLoggedIn() {
        return this._authService.isLoggedIn(); 
    }
    isAdmin() {
        // console.log(this._authService.user);
        return this._authService.user ? this._authService.user.isAdmin : false;
    }
}