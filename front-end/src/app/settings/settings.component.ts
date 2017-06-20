import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private clicked: boolean = false;
  public show: boolean = false;
  private oldpass: string = '';
  private message: string = '';
  @Input() private password: string;
  @Input() public email: string;
  @Output() private resetEvent: EventEmitter<any> = new EventEmitter();
  private resetUrl: string = 'http://localhost:5991/login/password';

  constructor( private newService: FromDBService ) { }

  ngOnInit() {
  }

  public setClicked = function(): void {
    this.clicked = !this.clicked;
  };

  public showResetInput = function(): void {
    this.show = !this.show;
  };

  public resetPassword = function(): void {
    if( this.oldpass == this.password ) {
      this.message = "Password reset ! Check your email !";
      this.newService.resetPass(this.resetUrl, this.email ).subscribe(
        (success) => {
          console.log("Password reset successful : " + success);
        },
        (error) => {
          console.log("Password reset error : " + error );
        },
        () => {
        }
      );
      this.resetEvent.emit(false);
    }
    else this.message = "Wrong password !";
  };

}
