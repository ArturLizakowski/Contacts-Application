import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './models/user.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: User = {
    userName: '',
    password: '',
  };

  public isButtonVisible = true;
  
  constructor(public authService: AuthService, public router: Router) {    
  }

  isExpanded = false;

  logOut(){
    this.router.navigate(['/'])
    this.authService.logOut();
  }
  
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  title = 'Contacts.WebApp';
}
