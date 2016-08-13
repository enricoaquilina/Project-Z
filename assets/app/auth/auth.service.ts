import {Injectable} from '@angular/core';
import {User} from './user';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthService{
    constructor(private _http: Http){}
    user: User;

    addUser(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/user/create', body, {headers:headers})
            .map(response => response.json()
                // let user = new User(data.email, data.password, data.firstName, data.lastName);
                // return user;
            )
            .catch(error => Observable.throw(error.json()));
    }
    // removeUser(user: User){
    //      return this._http.delete('http://localhost:3000/user/' + user.username)
    //         .map(response => response.json())
    //         .catch(error => Observable.throw(error.json()));        
    // }
    signInUser(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'})
        return this._http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map(response => {
                this.user = response.json();
                return response.json();
            })
            .catch(error => Observable.throw(error.json()));
    }
    logout(){
        this.user = null;
        localStorage.clear();
    }
    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }
    isAdmin(){
        return this.user? this.user.isAdmin: false;
    }
    isOwner(userId: string){
        return localStorage.getItem('userId') == userId;
    }
    updateUser(user: User){
        
    }
}