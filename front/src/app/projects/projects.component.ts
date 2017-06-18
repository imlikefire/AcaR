import { Component, OnInit } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private proj;

  constructor( private newService: FromDBService ) { }

  ngOnInit() {
    this.newService.getProjects().subscribe(
      proj => {
        this.proj=proj;
      },
      err => {
        console.log(err);
      }
    )
  }

}
