import { Component, OnInit, Input } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-barfe',
  templateUrl: './barfe.component.html',
  styleUrls: ['./barfe.component.css']
})
export class BarfeComponent implements OnInit {

  private barfaLink: string = "http://localhost:5991/v1/orar/barfe/getAllByProfesor/";
  @Input() profName: string;
  public barfe: Object;
  public barfa: string;

  constructor( private newService: FromDBService ) { }

  ngOnInit() {
    this.newService.getBarfe(this.barfaLink,this.profName).subscribe(
     barfe => {
        this.barfe=barfe;
      },
      err => {
        console.log(err);
      }
    )
  }

  public addBarfa = function(prof: string, name: string) {
    this.newService.addBarfa(this.barfaLink,prof,name).subscribe(
      barfe => {
        this.barfe=barfe;
      },
      err => {
        console.log(err);
      }
    )
  }

}
