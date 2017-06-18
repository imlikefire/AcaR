import { Component, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  private soft;

  constructor( private newService: FromDBService ) { }

  ngOnInit() {
    this.newService.getSoftware().subscribe(
      soft => {
        this.soft=soft;
      },
      err => {
        console.log(err);
      }
    )
  }

}
