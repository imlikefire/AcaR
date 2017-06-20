import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FromDBService } from '../fromdb.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private cursuri: Object;
  private od: Object;
  private soft: Object;
  private proj: Object;
  private profs: Object;
  private cursuriLink: string = "http://localhost:5991/v1/orar/discipline/getAll";
  private profsLink: string = "http://localhost:5991/v1/orar/profesori/getAll";
  private books: Object;
  private userLink: string = "http://localhost:5991/v1/users/";
  @Input() private userID: number;
  @Output() firstNameEvent: EventEmitter<any> = new EventEmitter();
  @Output() lastNameEvent: EventEmitter<any> = new EventEmitter();
  @Output() userRoleEvent: EventEmitter<any> = new EventEmitter();
  @Output() emailEvent: EventEmitter<any> = new EventEmitter();

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

    this.newService.getProfs(this.profsLink).subscribe(
      profs => {
        this.profs=profs;
      },
      err => {
        console.log(err);
      }
    );


    this.newService.getOnlineDocs().subscribe(
      od => {
        this.od=od;
      },
      err => {
        console.log(err);
      }
    );

    this.newService.getProjects().subscribe(
      proj => {
        this.proj=proj;
      },
      err => {
        console.log(err);
      }
    );

    this.newService.getSoftware().subscribe(
      soft => {
        this.soft=soft;
      },
      err => {
        console.log(err);
      }
    );

    this.getUsername();

  }

  private getUsername(): void {
    this.newService.getUser(this.userLink, this.userID).subscribe(
      user => {
        this.firstNameEvent.emit(user.firstName);
        this.lastNameEvent.emit(user.lastName);
        this.userRoleEvent.emit(user.role);
        this.emailEvent.emit(user.email);
      },
      err => {
        console.log(err);
      }
    );
  }

}
