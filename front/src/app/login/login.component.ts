import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

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

  constructor( private userService: FromDBService ) { }

  ngOnInit() {

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


}
