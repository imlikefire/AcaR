import { Component, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  private email: string = '';
  private code: string = '';
  private link: string = "http://localhost:5991/register/validate";
  private message: string = '';

  constructor( private userService: FromDBService ) { }

  ngOnInit() {
  }

  public validate(): void {
    this.userService.validateAccount(this.link,this.email,this.code).subscribe(
      (succes) => {
        console.log("Succes validation :" + succes);
        this.message = "Validation complete !";
      },
      (error) => {
        console.log("Error at validation :" + error);
      },
      () => {
      }
    );
  }

}
