import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authorize (){
    //server
    localStorage.setItem("token", "12345")
  }

  isLoggedIn (){
    if (localStorage.getItem("token")=="12345"){
      return true
    }
  }

}
