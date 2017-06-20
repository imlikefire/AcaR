import { Component, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';
import {delay} from "q";

@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',
  styleUrls: ['./profs.component.css']
})
export class ProfsComponent implements OnInit {

  public filterbyname: string = '';
  public filterbyrating: number = 0;
  public filterbyprom: number = 0;
  public profs: Object;
  public profName: string;
  public grade;
  public clicked: boolean = false;
  private profsLink: string = "http://localhost:5991/v1/orar/profesori/getAll";
  private gradeLink: string = "http://localhost:5991/v1/orar/profesori/addNota/";

  constructor(  private newService: FromDBService ) { }

  ngOnInit() {
    this.getTeachers();
  }

  public getTeachers = function() {
    this.newService.getProfs(this.profsLink).subscribe(
      profs => {
        this.profs=profs;
      },
      err => {
        console.log(err);
      }
    )
  };

  public addNota = function(name: string) {
    this.profName = name;
    this.clicked = true;
  };

  public gradeTeacher = function(name: string, grade: number) {
    if ( this.grade ) {
      this.newService.gradeProf(this.gradeLink, name, grade).subscribe(
        response => {
          console.log("success");
          let pr = JSON.parse(response._body);
          for( let i=0;i<this.profs.length;i++)
            if(this.profs[i].id_prof == pr.id_prof )
              this.profs[i]=pr;
        },
        (error) => {
          console.log("error");
        }
      );
    }
  };



}
