import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

declare const FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string = '';
  private userID: number;
  private password: string = '';
  private loginUrl: string = 'http://localhost:5991/login';
  @Output() private loginEvent: EventEmitter<any> = new EventEmitter();
  @Output() private userEvent: EventEmitter<any> = new EventEmitter();
  @Output() private passEvent: EventEmitter<any> = new EventEmitter();
  @Output() private nameEvent: EventEmitter<any> = new EventEmitter();
  @Output() private emailEvent: EventEmitter<any> = new EventEmitter();
  @Output() private roleEvent: EventEmitter<any> = new EventEmitter();

  constructor( private userService: FromDBService ) {
    FB.init({
      appId: '1353185968129247',
      secret: '15fddd64c6b7d17787d937716fb8c4fe',
      cookie: false,  // enable cookies to allow the server to access
      // the session
      xfbml: true,  // parse social plugins on this page
      version: 'v2.9', // use graph api version 2.5
      authEndpoint: 'localhost:5991',
      oauth:true,
      email: true
    });
  }

  ngOnInit() {

  }


  checkLogged () {
    FB.getLoginStatus(response => {
      this.onFacebookLoginClick();
    });
  }


  public onFacebookLoginClick(): void {

    FB.init({
      appId: '1353185968129247',
      secret: '15fddd64c6b7d17787d937716fb8c4fe',
      cookie: false,
      xfbml: true,
      version: 'v2.9',
      authEndpoint: 'localhost:5991',
      oauth:true,
      email: true
    });
    FB.login(function(response) {
      if (response.authResponse) {
        FB.api('/me', {"fields":"id,name,email,link"},
          function (response) {
            console.log(response);
            this.user = response;
            this.user.role = 'User';
            localStorage.setItem("userId",this.user.id);
            localStorage.setItem("userName",this.user.name);
            localStorage.setItem("userEmail",this.user.email);
            localStorage.setItem("userRole",this.user.role);
            console.log(this.user);
            self.emitLog(true,this.user);
          },
        );
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
    var self = this;

  }


  login() {
    this.userService.loginUser(this.loginUrl, this.email, this.password).subscribe(
      (response) => {
        this.loginEvent.emit(true);
        let id = response._body;
        this.userID = id;
        this.userEvent.emit(id);
        this.passEvent.emit(this.password);
      },
      (error) => {
        console.log("Login error !");
      },
      () => {
      }
    );

  }

  public emitLog = function(logged: boolean, user: any) {
    this.loginEvent.emit(logged);
    this.nameEvent.emit(user.name);
    this.emailEvent.emit(user.email);
    this.roleEvent.emit(user.role);
  }

}
