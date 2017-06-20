import { Component, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

declare const d3: any;

@Component({
  selector: 'app-cursuri',
  templateUrl: './cursuri.component.html',
  styleUrls: ['./cursuri.component.css']
})
export class CursuriComponent implements OnInit {

  public profClicked: boolean = false;
  public profName: string;
  public click = false;
  public cursuri: Object;
  public resources: Object;
  public course: string;
  public filterbyname: string = '';
  public filterbyan: string = '';
  private cursuriLink: string = "http://localhost:5991/v1/orar/discipline/getAll";
  private bestProfLink: string = "http://localhost:5991/v1/orar/profesori/getBestByNota/";
  private bestProcLink: string = "http://localhost:5991/v1/orar/profesori/getBestByProcentaj/";
  private resourcesLink: string = "http://localhost:5991/resurse/getByDisciplina/";
  public best: Object;
  public bestProc: Object;

  constructor( private newService: FromDBService ) { }

  ngOnInit() {
    this.newService.getCourses(this.cursuriLink).subscribe(
      cursuri => {
        this.cursuri=cursuri;
      },
      err => {
        console.log(err);
      }
    );


  }

  public getBestNota = function() {
    this.newService.getBestProf(this.bestProfLink,this.course).subscribe(
      best => {
        this.best=best;
      },
      err => {
        console.log(err);
      }
    )
  };

  public getBestProc = function() {
    this.newService.getBestProf(this.bestProcLink,this.course).subscribe(
      bestProc => {
        this.bestProc=bestProc;
      },
      err => {
        console.log(err);
      }
    )
  };

  public clicked = function(courseName: string) {
    this.click = true;
    this.course = courseName;
    this.getBestNota();
    this.getBestProc();
    this.getRes();
    this.profClicked = false;
  };

  options = {
    chart: {
      type: 'pieChart',
      height: 450,
      showLabels: true,
      duration: 0.01,
      refresh: true,
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
      key: "Nota 4",
      y: Math.floor((Math.random()*10)+1)
    },
    {
      key: "Nota 5",
      y: Math.floor((Math.random()*10)+1)
    },
    {
      key: "Nota 6",
      y: Math.floor((Math.random()*10)+1)
    },
    {
      key: "Nota 7",
      y: Math.floor((Math.random()*10)+1)
    },
    {
      key: "Nota 8",
      y: Math.floor((Math.random()*10)+1)
    },
    {
      key: "Nota 9",
      y: Math.floor((Math.random()*10)+1)
    },
    {
      key: "Nota 10",
      y: Math.floor((Math.random()*10)+1)
    }
  ];

  public getOrar = function(name: string) {
    this.profClicked = true;
    this.profName = name;
  }

  public getRes = function() {
    this.newService.getResourcesForCourse(this.resourcesLink,this.course).subscribe(
      resources => {
        this.resources = resources;
      },
      err => {
        console.log(err);
      }
    )
  }

}
