import {Component, OnInit} from '@angular/core';
// import {HubComponent} from './hub.component';
import {User} from '../user';
// import {HubService} from '../hub.service';
import {ErrorService} from '../../errors/error.service';
import {AuthService} from '../auth.service';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES,FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Control} from '@angular/common';
import {Router} from '@angular/router';
import {AppValidators} from '../../validators';

@Component({
    moduleId: module.id,
    selector: 'signup-component',
    templateUrl: 'signup.component.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class SignupComponent implements OnInit{
    form: FormGroup;
    
    username: Control;
    email: Control;
    password: Control;

    constructor(
        // private _hubService: HubService,
        private _errorService: ErrorService,
        private _authService: AuthService,
        private _fbld: FormBuilder,
        private _router: Router
    ) { }

    onSubmit(form: any) {        
        const user: User = new User(form.username, form.password, form.email);
        this._authService.addUser(user)
            .subscribe(
                data => {
                    this._router.navigate(['/signin']);
                },
                error => this._errorService.handleError(error)
            );
    }
    
    ngOnInit() {
        this.form = this._fbld.group({
            username: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            email: ['', [<any>Validators.required,AppValidators.isEmail]],
            password: ['', [<any>Validators.required, <any>Validators.minLength(8)]]
        });
    }
    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}