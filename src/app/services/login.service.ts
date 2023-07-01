import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  basePath: string = environment.basePath;
  private authUser$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  get getCurrentAuthUser(){
    return this.authUser$.asObservable();
  }
  setCurrentAuthUser(user: boolean){
    this.authUser$.next(user);
  }

  resetPassword(name: string, newPassword: string) {
    const resetData = {
      name: name,
      newPassword: newPassword
    };

    return this.http.post(`${this.basePath}/creates/reset-password`, resetData);
  }
  
}
