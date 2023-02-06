import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  model: User = {
    userName: '',
    password: '',
  };
  
  public isButtonVisible = true;
  working = false;
  
  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  login() {
    this.working = true;
    this.authService.login(this.model).subscribe(
      (response) => {
        this.router.navigateByUrl('/contactsList');
      },
      (error) => {
        console.log("Something wrong!");
      }
    )
  }
  onLoginClick() {
    this.authService.logIn();
  }

  onLogoutClick() {
    this.authService.logOut();
  }
}

