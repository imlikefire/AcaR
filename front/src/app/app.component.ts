import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private loggedIn: boolean = false;
  private password: string;
  private firstName: string = '';
  private lastName: string = '';
  private userRole: string = '';
  private userID: number;
  private email: string = '';
  private loginLoaded: boolean = true;
  private registered: boolean = false;

  constructor( ){ }

  public setLoginStatus = function(log: boolean): void {
    this.loggedIn=log;
  };

  public setID = function(id: number): void {
    this.userID=id;
  };

  public setFirstName = function(name: string) {
    this.firstName = name;
  };

  public setLastName = function(name: string) {
    this.lastName = name;
  };

  public loadLogin = function(): void {
    this.loginLoaded = true;
  };

  public loadRegister = function(): void {
    this.loginLoaded = false;
  };

  public setRegistered = function(reg: boolean): void {
    this.registered = reg;
  };

  public setUserRole = function(role: string): void {
    this.userRole = role;
  };

  public setUserEmail = function(email: string): void {
    this.email = email;
  };

  public setPassword = function(pass: string): void {
    this.password = pass;
  };
}
