import { Component, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public filterByGroup = '';
  public filterByClass = '';
  public filterByName = '';
  public filterByProf = '';
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
