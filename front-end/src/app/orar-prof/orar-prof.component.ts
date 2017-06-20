import { Component, OnInit, Input } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-orar-prof',
  templateUrl: './orar-prof.component.html',
  styleUrls: ['./orar-prof.component.css']
})
export class OrarProfComponent implements OnInit {

  @Input() profName: string;
  private schedule: Object;
  private scheduleLink: string = "http://localhost:5991/v1/orar/getAll";

  constructor( private newService: FromDBService ) { }

  ngOnInit() {
    this.newService.getCourses(this.scheduleLink).subscribe(
      schedule => {
        this.schedule=schedule;
      },
      err => {
        console.log(err);
      }
    )
  }

}
