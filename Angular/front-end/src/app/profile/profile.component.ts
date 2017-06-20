import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare const FB: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() private firstName: string = '';
  @Input() private lastName: string = '';
  @Input() private userRole: string = '';
  @Input() private email: string = '';
  @Output() private logEvent: EventEmitter<any> = new EventEmitter();
  private clicked: boolean = false;

  constructor() {
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

  public setClicked = function(): void {
    this.clicked = !this.clicked;
  }

  public logout = function(): void {
    this.logEvent.emit(false);
  }

  public FBlogOut() {
    FB.logout(function(response){});
    this.logEvent.emit(false);
  }

}
