import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() private registerEvent: EventEmitter<any> = new EventEmitter();
  private user: Object = {
    active : false,
    email : '',
    firstName : '',
    id : 0,
    lastName : '',
    password : '',
    role : 'student'
  };
  private userLink : string = "http://localhost:5991/register";

  constructor( private userService: FromDBService ) { }

  ngOnInit() {
  }

  public register(): void {
    this.userService.registerUser(this.userLink, this.user).subscribe(
      (succes) => {
        console.log("Register succeeded :" + succes);
        this.registerEvent.emit(true);
      },
      (error) => {
      console.log("Register error !");
      },
      () => {
      }
    );
  }

}
