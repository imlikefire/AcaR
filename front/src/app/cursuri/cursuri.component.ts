import { Component, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

declare const d3: any;

@Component({
  selector: 'app-cursuri',
  templateUrl: './cursuri.component.html',
  styleUrls: ['./cursuri.component.css']
})
export class CursuriComponent implements OnInit {

  public click = false;
  public cursuri: Object;
  public filterbyname: string = '';
  public filterbyan: string = '';
  private cursuriLink: string = "http://localhost:5991/v1/orar/discipline/getAll";

  constructor( private newService: FromDBService ) { }

  ngOnInit() {
    this.newService.getCourses(this.cursuriLink).subscribe(
      cursuri => {
        this.cursuri=cursuri;
      },
      err => {
        console.log(err);
      }
    )
  }

  public clicked = function() {
    this.click = !this.click;
  }

  options = {
    chart: {
      type: 'pieChart',
      height: 450,
      showLabels: true,
      duration: 500,
      labelThreshold: 0.01,
      labelSunbeamLayout: true,
      legend : {
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        }
      },
      x: function (d) {
        return d.key;
      },
      y: function (d) {
        return d.y;
      }
    }
  };

  data: any =  [
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    },
    {
      key: "Four",
      y: 7
    },
    {
      key: "Five",
      y: 4
    },
    {
      key: "Six",
      y: 3
    },
    {
      key: "Seven",
      y: .5
    }
  ];




}
