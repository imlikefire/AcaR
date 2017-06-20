import { Component, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-onlinedocs',
  templateUrl: './onlinedocs.component.html',
  styleUrls: ['./onlinedocs.component.css']
})
export class OnlinedocsComponent implements OnInit {

  private od;

  constructor( private newService: FromDBService ) { }

  ngOnInit() {
    this.newService.getOnlineDocs().subscribe(
      od => {
        this.od=od;
      },
      err => {
        console.log(err);
      }
    )
  }

}
