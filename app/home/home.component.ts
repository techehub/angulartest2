import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title : string = ""
  loggedIn : boolean = false;

  constructor( private service : AuthService ) { }

  ngOnInit(): void {
    this.title= "Vijeesh"
    this.loggedIn= this.service.isLoggedIn()

  }

  calc (a, b){
   return a*b
   //return 0
  }

}
