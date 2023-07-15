import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  basePath: string = environment.basePath;
  private logged$ = new BehaviorSubject<boolean>(false);

  
  constructor(private http: HttpClient) {}

  get getCurrentAuthUser(){
    let user = JSON.parse(localStorage.getItem("user") || "");

    return user;
  }
  setCurrentAuthUser(user: any){
    localStorage.setItem("user",JSON.stringify(user));
    this.logged$.next(true);
  }

  resetPassword(name: string, newPassword: string) {
    const resetData = {
      name: name,
      newPassword: newPassword
    };

    return this.http.post(`${this.basePath}/creates/reset-password`, resetData);
  }

  login(email: string, password: string) {
    const loginData: Login = {
      email: email,
      password: password
    };

    return this.http.post(`${this.basePath}/login`, loginData);
  }

  logout(){
    localStorage.removeItem("user");
    this.logged$.next(false);
  }

  islogged(){
    if(this.getCurrentAuthUser){
      this.logged$.next(true);
    }
    return this.logged$.asObservable();
  }
}
